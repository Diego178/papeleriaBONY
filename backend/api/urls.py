from django.urls import path
from . import views

urlpatterns = [
    path('', views.getHola),

    ### URLS Cuentas ###
    path('cuentas/', views.getUsers), #devuelve todas las cuentas
    path('cuentas/<int:pk>/', views.putUser), #ingresar cambios a la cuenta
    path('cuentas/login/<str:email>/<str:password>/', views.getUser), #Iniciar sesion
    path('cuentas/post/', views.postUser), #agregar nueva cuenta
    path('hola/', views.getHola), #hola

    ### URLS Productos ###
    path('productos/', views.getProducto),
    path('productos/post/', views.postProducto),
    
]