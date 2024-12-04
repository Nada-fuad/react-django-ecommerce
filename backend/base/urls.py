from django.urls import path
from . import views


urlpatterns = [
    path("",views.getProducts),
        path('product/<str:id>/', views.getProduct, name='get_product')

]
