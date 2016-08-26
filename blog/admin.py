from django.contrib import admin
from .models import Registrado

class AdminRegistrado(admin.ModelAdmin):
    list_display = ["__unicode__", "codigo_postal", "nombre", "actualizado", "timestamp"]
    class Meta:
        model = Registrado
        
admin.site.register(Registrado, AdminRegistrado)