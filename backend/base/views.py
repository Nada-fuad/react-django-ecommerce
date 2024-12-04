from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Product
from .products import products
from .serializer import Productserializer


# Create your views here.

@api_view(['GET'])
def getProducts(request):
  products=Product.objects.all()
  serializer=Productserializer(products,many=True)
  return Response(serializer.data)

@api_view(['GET'])
def getProduct(request,id):
    product=Product.objects.get(_id=id)
    serializer=Productserializer(product,many=False)
    return  Response(serializer.data)
