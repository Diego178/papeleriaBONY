from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    name=models.CharField(max_length=60)
    email=models.CharField(max_length=30, unique=True)
    password=models.CharField(max_length=10)
    phone=models.CharField(max_length=10, default=" ")
    direccion=models.CharField(max_length=50, default="xalapa")
    isAdmin=models.BooleanField(default=False)

    first_name = None
    last_name = None
    username = None

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []