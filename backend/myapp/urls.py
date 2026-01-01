from django.urls import path
from .views import PersonList

urlpatterns = [
    # This maps 'http://127.0.0.1:8000/api/people/' to your PersonList view
    path('people/', PersonList.as_view(), name='person-list'),
]