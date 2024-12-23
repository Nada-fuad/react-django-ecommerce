
from django.shortcuts import render
from rest_framework.decorators import api_view,permission_classes
from rest_framework.permissions import IsAuthenticated,IsAdminUser
from rest_framework.response import Response
from rest_framework import status

from base.models import Product
from base.serializer import Productserializer,Userserializer,UserserializerWithToken
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password



class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    # @classmethod
    # def get_token(cls, user):
    #     token = super().get_token(user)

    #     # Add custom claims
    #     token['username'] = user.username
    #     token["email"]=user.email
    #     # ...

    #     return token
    def validate(self, attrs):
        data = super().validate(attrs)


        # data["username"] = self.user.username
        # data["email"] = self.user.email
        serializer=UserserializerWithToken(self.user).data
        
        for k,v in serializer.items():
          data[k]=v
          


      

        return data
class MyTokenObtainPairView(TokenObtainPairView):
  serializer_class=MyTokenObtainPairSerializer
  
  

# Create your views here.

@api_view(['POST'])
def registerUser(request):
  data=request.data
  try:
        user=User.objects.create(
        first_name=data['name'],
        username=data['email'],
        email=data['email'],
        password= make_password(data['password'])
  )
        serializer=UserserializerWithToken(user,many=False)
        return Response(serializer.data)
  except:
    message={'detail':'User with this email already exist'}
    return Response(message,status=status.HTTP_400_BAD_REQUEST)
  

# @api_view(['GET'])
# @permission_classes([IsAuthenticated])
# def getUserProfile(request):
#   user=User.objects.all()
#   serializer=Userserializer(user,many=True)
#   return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateUserProfile(request):
  user=request.user
  serializer=UserserializerWithToken(user,many=False)
  data=request.data

  user.first_name=data['name']
  user.username=data['email']
  user.email=data['email']
  
  if data['password']!='':
    user.password=make_password(data['password'])
  user.save()
    

  
  return Response(serializer.data)
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
  user=request.user
  serializer=Userserializer(user,many=False)
  return Response(serializer.data)



@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUsers(request):
  users=User.objects.all()
  serializer=Userserializer(users,many=True)
  return Response(serializer.data)