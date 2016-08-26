from django import forms

class RegForms(forms.Form):
    nombre_form = forms.CharField(max_length=100)
    edad = forms.IntegerField()