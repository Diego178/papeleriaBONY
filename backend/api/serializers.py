from rest_framework.serializers import ModelSerializer
from .models import User, Producto, Carrito, Carrito_Producto

class UsersSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class ProductoSerializer(ModelSerializer):
    class Meta:
        model = Producto
        fields = '__all__'

class CarritoSerializer(ModelSerializer):
    class Meta:
        model = Carrito
        fields = '__all__'


class CarritoProductoSerializer(ModelSerializer):
    class Meta:
        model = Carrito_Producto
        fields = '__all__'