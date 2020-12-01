from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.GreetingView.as_view(), name = "greeting card")
]
