from django.db import models
# users/models.py
from django.contrib.auth.models import AbstractUser
class CustomUser(AbstractUser):
    pass
# Create your models here.
