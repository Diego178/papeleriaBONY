from django.urls import path
from . import views

urlpatterns = [
    path('cuentas/', views.getUsers), #devuelve todas las cuentas
    path('cuentas/login/<str:email>/<str:password>/', views.getUser), #Iniciar sesion
    path('cuentas/post/', views.postUser), #agregar nueva cuenta
    path('hola/', views.getHola), #hola
]