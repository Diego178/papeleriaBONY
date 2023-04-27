from rest_framework.response import Response
from rest_framework.serializers import Serializer
from rest_framework.decorators import api_view
from rest_framework.exceptions import APIException
from .authentication import crearToken
from .serializers import UsersSerializer

from .models import User
    
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

# @api_view(['PUT'])
# def putEmployee(request, pk):
#     data = request.data
#     employee = Employee.objects.get(id=pk)
#     serializer = EmployeesSerializer(instance=employee, data = data)
#     if(serializer.is_valid()):
#         serializer.save()
#     return Response(serializer.data)
    
# @api_view(['DELETE'])
# def deleteEmployee(request, pk):
#     employee = Employee.objects.get(id=pk)
#     employee.delete()
#     return Response('Empleado eliminado')
