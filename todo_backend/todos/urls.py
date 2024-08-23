from django.urls import path
from . import views

urlpatterns = [
    path('api/todos/', views.TodoItemListCreate.as_view(), name='todo-list-create'),
    path('api/todos/<int:pk>/', views.TodoItemDetail.as_view(), name='todo-detail'),
]