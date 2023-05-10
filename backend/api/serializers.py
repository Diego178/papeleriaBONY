from rest_framework.serializers import ModelSerializer
from .models import User, Producto

class UsersSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class ProductoSerializer(ModelSerializer):
    class Meta:
        model = Producto
        fields = '__all__'