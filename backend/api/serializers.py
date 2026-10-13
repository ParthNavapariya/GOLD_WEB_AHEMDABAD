from rest_framework import serializers
from .models import GoldRate, TradeEnquiry

class GoldRateSerializer(serializers.ModelSerializer):
    perGram = serializers.FloatField(source='per_gram')
    per10g = serializers.FloatField(source='per_10g')

    class Meta:
        model = GoldRate
        fields = ['purity', 'label', 'perGram', 'per10g', 'change']


class TradeEnquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = TradeEnquiry
        fields = ['id', 'name', 'phone', 'email', 'enquiry_type', 'purity', 'quantity', 'message', 'created_at']
        read_only_fields = ['id', 'created_at']
