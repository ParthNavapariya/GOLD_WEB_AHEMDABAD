from django.urls import re_path
from . import views

urlpatterns = [
    re_path(r'^gold-rates/?$', views.get_gold_rates, name='gold-rates'),
    re_path(r'^gold-rates/update/?$', views.update_gold_rates, name='update-gold-rates'),
    re_path(r'^enquiries/?$', views.list_enquiries, name='list-enquiries'),
    re_path(r'^contact/(?P<form_name>[\w-]+)/?$', views.submit_contact, name='submit-contact-form'),
    re_path(r'^contact/?$', views.submit_contact, name='submit-contact'),
    re_path(r'^health/?$', views.health_check, name='health-check'),
]
