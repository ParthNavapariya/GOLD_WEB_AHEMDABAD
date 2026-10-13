from django.contrib import admin
from .models import GoldRate, TradingDeskConfig, TradeEnquiry

admin.site.site_header = "Ahmedabad Gold Process — Trading Desk Admin"
admin.site.site_title = "Ahmedabad Gold Process"
admin.site.index_title = "Bullion Management & Trade Desk"

@admin.register(GoldRate)
class GoldRateAdmin(admin.ModelAdmin):
    list_display = ('purity', 'label', 'per_gram', 'per_10g', 'change', 'display_order', 'updated_at')
    list_editable = ('per_gram', 'per_10g', 'change', 'display_order')
    ordering = ('display_order',)


@admin.register(TradingDeskConfig)
class TradingDeskConfigAdmin(admin.ModelAdmin):
    list_display = ('source', 'admin_password', 'updated_at')


@admin.register(TradeEnquiry)
class TradeEnquiryAdmin(admin.ModelAdmin):
    list_display = ('name', 'phone', 'email', 'enquiry_type', 'purity', 'quantity', 'created_at', 'is_reviewed')
    list_filter = ('is_reviewed', 'enquiry_type', 'created_at')
    search_fields = ('name', 'phone', 'email', 'message')
    list_editable = ('is_reviewed',)
