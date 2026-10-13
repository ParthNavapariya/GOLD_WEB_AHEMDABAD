from datetime import datetime
from django.utils import timezone
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import GoldRate, TradingDeskConfig, TradeEnquiry
from .serializers import GoldRateSerializer, TradeEnquirySerializer


def get_or_create_config():
    config, _ = TradingDeskConfig.objects.get_or_create(id=1, defaults={
        "source": "MCX — Ahmedabad Gold Process Trading Desk",
        "admin_password": "Nikul.1991",
    })
    return config


def seed_default_rates_if_empty():
    if GoldRate.objects.count() == 0:
        defaults = [
            {"purity": "24K", "label": "24 Karat (999.00)", "per_gram": 7420.0, "per_10g": 74200.0, "change": 45.0, "display_order": 1},
            {"purity": "22K", "label": "22 Karat (916)", "per_gram": 6802.0, "per_10g": 68020.0, "change": 41.0, "display_order": 2},
            {"purity": "18K", "label": "18 Karat (750)", "per_gram": 5565.0, "per_10g": 55650.0, "change": 34.0, "display_order": 3},
        ]
        for d in defaults:
            GoldRate.objects.create(**d)


@api_view(['GET'])
def get_gold_rates(request):
    seed_default_rates_if_empty()
    rates = GoldRate.objects.all().order_by('display_order')
    config = get_or_create_config()

    serializer = GoldRateSerializer(rates, many=True)
    latest_update = rates.order_by('-updated_at').first()
    updated_at_iso = latest_update.updated_at.isoformat() if latest_update else timezone.now().isoformat()

    return Response({
        "success": True,
        "data": {
            "rates": serializer.data,
            "updatedAt": updated_at_iso,
            "source": config.source
        }
    })


@api_view(['POST'])
def update_gold_rates(request):
    config = get_or_create_config()
    password = request.data.get('password')
    rates_data = request.data.get('rates', [])
    source = request.data.get('source')

    if not password or password != config.admin_password:
        return Response(
            {"success": False, "error": "Unauthorised — invalid password"},
            status=status.HTTP_401_UNAUTHORIZED
        )

    if not isinstance(rates_data, list):
        return Response(
            {"success": False, "error": "rates array required"},
            status=status.HTTP_400_BAD_REQUEST
        )

    for item in rates_data:
        purity = item.get('purity')
        per_gram = item.get('perGram')
        per_10g = item.get('per10g')
        change = item.get('change', 0)
        label = item.get('label')

        if purity and per_gram is not None:
            GoldRate.objects.update_or_create(
                purity=purity,
                defaults={
                    "label": label or f"{purity} Gold",
                    "per_gram": float(per_gram),
                    "per_10g": float(per_10g or (float(per_gram) * 10)),
                    "change": float(change or 0),
                }
            )

    if source:
        config.source = source
        config.save()

    all_rates = GoldRate.objects.all().order_by('display_order')
    serializer = GoldRateSerializer(all_rates, many=True)

    return Response({
        "success": True,
        "data": {
            "rates": serializer.data,
            "updatedAt": timezone.now().isoformat(),
            "source": config.source
        }
    })


@api_view(['POST'])
def submit_contact(request, form_name=None):
    data = request.data
    is_subscriber = form_name in ['desk-updates', 'newsletter', 'subscribe'] or data.get('enquiryType') == 'Desk Intelligence Feed'
    name = data.get('name') or data.get('fullName') or ('Desk Subscriber' if is_subscriber else 'Anonymous Trader')
    phone = data.get('phone') or data.get('phoneNumber') or ''
    email = data.get('email') or data.get('emailAddress') or ''
    
    if is_subscriber:
        enquiry_type = data.get('enquiryType') or 'Desk Intelligence Feed'
    else:
        enquiry_type = form_name or data.get('enquiryType') or data.get('requirement') or 'Trade Enquiry'
        
    purity = data.get('purity') or ''
    quantity = data.get('quantity') or data.get('weight') or ''
    message = data.get('message') or data.get('comments') or ('Subscribed to 10:00 AM IST Daily Market Intelligence' if is_subscriber else '')

    enquiry = TradeEnquiry.objects.create(
        name=name,
        phone=phone,
        email=email,
        enquiry_type=enquiry_type,
        purity=purity,
        quantity=quantity,
        message=message
    )

    return Response({
        "success": True,
        "message": "Enquiry registered successfully with trading desk",
        "id": enquiry.id
    }, status=status.HTTP_201_CREATED)


@api_view(['POST', 'GET'])
def list_enquiries(request):
    config = get_or_create_config()
    password = request.data.get('password') if request.method == 'POST' else request.query_params.get('password')

    if not password or password != config.admin_password:
        return Response(
            {"success": False, "error": "Unauthorised — invalid password"},
            status=status.HTTP_401_UNAUTHORIZED
        )

    enquiries = TradeEnquiry.objects.all().order_by('-created_at')[:50]
    serializer = TradeEnquirySerializer(enquiries, many=True)
    return Response({
        "success": True,
        "data": serializer.data
    })


@api_view(['GET'])
def health_check(request):
    return Response({
        "status": "ok",
        "timestamp": timezone.now().isoformat(),
        "framework": "Django 6.1 + DRF",
        "message": "Ahmedabad Gold Process Django Backend Active"
    })
