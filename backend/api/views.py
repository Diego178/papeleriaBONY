from rest_framework.response import Response
from rest_framework.serializers import Serializer
from rest_framework.decorators import api_view
from rest_framework.exceptions import APIException
from .authentication import crearToken
from .serializers import UsersSerializer, ProductoSerializer

from .models import Producto, User
    
@api_view(['GET'])
def getUsers(request):
    user = User.objects.all();
    serializer = UsersSerializer(user, many = True)
    return Response(serializer.data)
    

@api_view(['GET'])
def getUser(request):
    email = request.data.get('email')
    password = request.data.get('password')
    user = User.objects.filter(email=email, password=password).first()

    if not user:
        return ('Credenciales Invalidas!')
    

    if user is not None:
        response = Response()
        response.data = {
            'token': crearToken(user.id)
        }
        return response
    else:
        return Response("400")


@api_view(['GET'])
def getHola(request):
    return Response("hola")

@api_view(['POST'])
def postUser(request):
    data = request.data
    user = User.objects.create(
        name = data['name'],
        email = data['email'],
        password = data['password'],
        phone = data['phone'],
        direccion = data['direccion']
    )
        
    serializer = UsersSerializer(user, many = False)
    return Response(serializer.data)

@api_view(['PUT'])
def putUser(request, pk):
    data = request.data
    user = User.objects.get(id=pk)
    serializer = UsersSerializer(instance=user, data = data)
    # if(serializer.is_valid()):
    #     serializer.save()
    try:
        if(serializer.is_valid()):
            serializer.save()
    except Exception as e:
        print(e)
    return Response(serializer.data)
    
# @api_view(['DELETE'])
# def deleteEmployee(request, pk):
#     employee = Employee.objects.get(id=pk)
#     employee.delete()
#     return Response('Empleado eliminado')


@api_view(['GET'])
def getProducto(request):
    productos = Producto.objects.all()
    serializer = ProductoSerializer(productos, many = True)
    return Response(serializer.data)


@api_view(['POST'])
def postProducto(request):
    data = request.data
    producto = Producto.objects.create(
        nombre = data['nombre'],
        descripcion = data['descripcion'],
        precio = data['precio'],
        cantidad = data['cantidad'],
        categoria = data['categoria'],
        imagen = data['imagen']
    )
        
    serializer = ProductoSerializer(producto, many = False)
    return Response(serializer.data)
