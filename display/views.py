from django.shortcuts import render
from django.http import HttpResponse
import json
from django.views import View
# Create your views here.
class GreetingView(View):
    def get(self, request ):
        """
        greeting_qs = GreetingCard.objects.all().only('name', 'message')
        dict_ = {}
        greeting_qs = [ dict_['name'] for each in greeting_qs]
        print(greeting_qs)
        data = serializers.serialize("json", greeting_qs)
        """
        return render(request, "main_display_cards.html")
