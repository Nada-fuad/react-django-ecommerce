from django.urls import path
from base.views import user_views as views



urlpatterns = [
    
        path('profile/', views.getUserProfile, name='get_user_profile'),
                path('', views.getUsers, name='get_users'),
                                path('register/', views.registerUser, name='register'),



            path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),


]
