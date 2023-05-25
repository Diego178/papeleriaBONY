from django.urls import path
from . import views

urlpatterns = [
    path('', views.getHola),

    ### URLS Cuentas ###
    path('cuentas/', views.getUsers), #devuelve todas las cuentas
    path('cuentas/<int:pk>/', views.putUser), #ingresar cambios a la cuenta
    path('cuentas/login/', views.getUser), #Iniciar sesion
    path('cuentas/post/', views.postUser), #agregar nueva cuenta
    path('hola/', views.getHola), #hola

    ### URLS Productos ###
    path('productos/', views.getProductos),
    path('productos/<int:pk>/', views.getProducto),
    path('productos/post/', views.postProducto),
    path('productos/put/<int:pk>/', views.putProducto),

    ## URLS Carrito ##
    path('carritos/', views.getCarritos),
    path('carritos/post/', views.postCarrito),
    #Devuelve los productos de un carrito en especifico
    path('carritos/<int:pk>/', views.getCarrito),

    ## Agregar un producto al carrito, 1.pk=usuario, 2.pk=producto
    path('carrito_producto/post/', views.postCarritoProducto),

    ##Obtener los productos de un carrito enviando el id_usuario
    path('carrito_producto/<int:pk>/', views.getCarritoProducto),

    path('carrito_producto/delete/<int:pk>/', views.deleteCarritoProducto)
]