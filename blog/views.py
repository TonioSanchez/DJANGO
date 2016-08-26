from django.shortcuts import render
from .models import Registrado

def inicio(request):
    return render(request, "index.html", {})