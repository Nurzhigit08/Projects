from django.contrib import admin

from django.urls import path, include


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('app1.urls')),
]

from django.urls import path, include

from . import views


urlpatterns = [
    path('', views.home, name='home'),
]