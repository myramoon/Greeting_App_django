from django import forms
from .models import GreetingCard

class Card_Detail_Form(forms.ModelForm):
    class Meta:
        model = GreetingCard
        fields = ["name" , "message"]