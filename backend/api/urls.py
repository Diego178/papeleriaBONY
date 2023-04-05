from django.urls import path
from . import views

urlpatterns = [
    path('get/<string>', views.getUser),
    path('get/<str:email>/<str:password>/', views.getUser),
    path('get-user/', views.getUser, name='get_user'),
    path('post/', views.postUser),
    # path('put/<int:pk>/', views.putEmployee),
    # path('delete/<int:pk>/', views.deleteEmployee),
    path('hola/', views.getHola),
]