from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Product
from rest_framework_simplejwt.tokens import RefreshToken




class Productserializer(serializers.ModelSerializer):
  class Meta:
    model=Product
    fields='__all__'
class Userserializer(serializers.ModelSerializer):
  name=serializers.SerializerMethodField(read_only=True)
  _id=serializers.SerializerMethodField(read_only=True)
  isAdmin=serializers.SerializerMethodField(read_only=True)
  class Meta:
    model=User
    fields=['username','email','password','id','name','_id','isAdmin']
  def get_name(self,obj):
    name=obj.first_name
    if name =="":
      name=obj.id
    return name
  def get__id(self,obj):
    return obj.id
  def get_isAdmin(self,obj):
    return obj.is_staff
class UserserializerWithToken(Userserializer):
    token=serializers.SerializerMethodField(read_only=True)
    class Meta:
      model=User
      fields=['username','email','password','id','name','_id','isAdmin','token']
    def get_token(self,obj):
      token=RefreshToken.for_user(obj)
      return str(token.access_token)