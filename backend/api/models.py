from django.db import models

class GoldRate(models.Model):
    purity = models.CharField(max_length=10, unique=True, help_text="e.g. 24K, 22K, 18K")
    label = models.CharField(max_length=100, help_text="e.g. 24 Karat (999.00)")
    per_gram = models.FloatField(help_text="Price per gram in ₹")
    per_10g = models.FloatField(help_text="Price per 10 grams in ₹")
    change = models.FloatField(default=0.0, help_text="Daily tick change in ₹/g")
    display_order = models.PositiveSmallIntegerField(default=1)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['display_order']
        verbose_name = "Gold Rate"
        verbose_name_plural = "Gold Rates"

    def __str__(self):
        return f"{self.purity} — ₹{self.per_gram}/g (₹{self.per_10g}/10g)"


class TradingDeskConfig(models.Model):
    source = models.CharField(
        max_length=255,
        default="MCX — Ahmedabad Gold Process Trading Desk",
        help_text="Benchmark source displayed to public"
    )
    admin_password = models.CharField(
        max_length=128,
        default="Nikul.1991",
        help_text="Terminal password for fast rate overrides"
    )
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Desk Configuration"
        verbose_name_plural = "Desk Configuration"

    def __str__(self):
        return f"Config (Source: {self.source})"


class TradeEnquiry(models.Model):
    name = models.CharField(max_length=150)
    phone = models.CharField(max_length=30)
    email = models.EmailField(blank=True, null=True)
    enquiry_type = models.CharField(max_length=100, default="Bullion Order")
    purity = models.CharField(max_length=20, blank=True, null=True)
    quantity = models.CharField(max_length=100, blank=True, null=True)
    message = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    is_reviewed = models.BooleanField(default=False)

    class Meta:
        ordering = ['-created_at']
        verbose_name = "Trade Enquiry"
        verbose_name_plural = "Trade Enquiries"

    def __str__(self):
        return f"{self.name} ({self.phone}) — {self.enquiry_type} on {self.created_at.strftime('%d-%b-%Y')}"
