
from django.contrib import admin
from django.urls import path, include
from api.views import CreateUserView
from .views import ListCreateNote, DeleteNote
# import rest_framework
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
urlpatterns = [
    path("notes/", ListCreateNote.as_view(), name="note-list" ),
    path("notes/delete/<int:pk>", DeleteNote.as_view(), name="note-delete" ),
    
]
