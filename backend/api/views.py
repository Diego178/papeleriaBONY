from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework.serializers import Serializer
from rest_framework.decorators import api_view
from rest_framework.exceptions import APIException
from rest_framework import status
from .authentication import crearToken
from .serializers import UsersSerializer, ProductoSerializer, CarritoSerializer, CarritoProductoSerializer

from .models import Producto, User, Carrito, Carrito_Producto
    
@api_view(['GET'])
def getUsers(request):
    user = User.objects.all()
    serializer = UsersSerializer(user, many = True)
    return Response(serializer.data)
    

@api_view(['POST'])
def getUser(request):
    email = request.data.get('email')
    password = request.data.get('password')
    user = User.objects.filter(email=email, password=password).first()

    if not user:
        return ('Credenciales Invalidas!')

    if user is not None:
        response = Response()
        response.data = {
            'token': crearToken(user.id),
            'id': user.id
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

#Ingresar cambios a la cuenta

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

#Obtener todos los productos
@api_view(['GET'])
def getProductos(request):
    productos = Producto.objects.all()
    serializer = ProductoSerializer(productos, many = True)
    return Response(serializer.data)

@api_view(['PUT'])
def putProducto(request, pk):
    try:
        producto = Producto.objects.get(pk=pk)
    except Producto.DoesNotExist:
        return Response({'message': 'Producto not found'}, status=status.HTTP_404_NOT_FOUND)

    serializer = ProductoSerializer(producto, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


#Obtener un producto
@api_view(['GET'])
def getProducto(request, pk):
    producto = get_object_or_404(Producto, id=pk)
    serializer = ProductoSerializer(producto)
    return Response(serializer.data)

#Postear un producto

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


# Devolver todos los carritos

@api_view(['GET'])
def getCarritos(request):
    carritos = Carrito.objects.all()
    serializer = CarritoSerializer(carritos, many = True)
    return Response(serializer.data)

#Postear un carrito
@api_view(['POST'])
def postCarrito(request):
    pk = request.data['id_user']
    user = User.objects.get(id=pk)
    carrito = Carrito.objects.create(
        id_user = user,
        total = 0
    )
        
    serializer = CarritoSerializer(carrito, many = False)
    return Response(serializer.data)

#Obtener un carrito en especifico con el id_usuario
@api_view(['GET'])
def getCarrito(request, pk, token):
    carrito = Carrito.objects.filter(id_user=pk).first()
    user = User.objects.get(token=token)


    if not carrito:
        return ('Carrito no existe!')
    else:
        serializer = CarritoSerializer(carrito, many = False)
        return Response(serializer.data) 



#agregar producto al carrito
@api_view(['POST'])
def postCarritoProducto(request):
    data = request.data
    usuario_id = data.get('id_usuario')
    producto_id = data.get('id_producto')
    cantidad = data.get('cantidad')


    usuario = User.objects.get(id=usuario_id)
    carrito = Carrito.objects.get(id_user=usuario)
    producto = Producto.objects.filter(id=producto_id).first()

    if not (usuario and carrito and producto):
        return Response({'message': 'Usuario, carrito o producto no encontrado'}, status=status.HTTP_404_NOT_FOUND)
    
    producto.cantidad = producto.cantidad - int(cantidad)
    producto.save()
    print("correcto")


    carritoProducto = Carrito_Producto.objects.create(
        id_carrito=carrito,
        id_producto=producto,
        nombre=producto.nombre,
        cantidad=cantidad
    )

    serializer = CarritoProductoSerializer(carritoProducto, many=False)
    return Response(serializer.data)


@api_view(['GET'])
def getCarritoProducto(request, pk):
    user = User.objects.get(id=pk)
    carrito = Carrito.objects.get(id_user=user)

    carrito_producto = Carrito_Producto.objects.filter(id_carrito=carrito)
    serializer = CarritoProductoSerializer(carrito_producto, many=True)
    return Response(serializer.data)


@api_view(['DELETE'])
def deleteCarritoProducto(request, pk):
    carritoProducto = Carrito_Producto.objects.get(id=pk)
    producto = carritoProducto.id_producto
    producto = Producto.objects.get(id=producto.id)
    producto.cantidad = producto.cantidad + carritoProducto.cantidad
    producto.save()
    carritoProducto.delete()
    return Response('Producto eliminado del carrito eliminado')


