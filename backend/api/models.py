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


class Producto(models.Model):
    nombre=models.CharField(max_length=30)
    descripcion=models.CharField(max_length=250)
    precio=models.FloatField()
    cantidad=models.IntegerField()
    categoria=models.CharField(max_length=20)
    imagen=models.URLField(max_length=350)


class Carrito(models.Model):
    id_user = models.ForeignKey(
        User,
        on_delete=models.PROTECT,
        blank=False
    )
    total = models.FloatField()


class Carrito_Producto(models.Model):
    id_carrito = models.ForeignKey(
        Carrito,
        on_delete=models.PROTECT,
        blank=False,
        default=0
    )
    id_producto = models.ForeignKey(
        Producto,
        on_delete=models.PROTECT,
        blank=False,
        default=0
    )
    nombre = models.CharField(max_length=30)
    cantidad = models.IntegerField()