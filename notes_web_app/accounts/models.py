from django.db import models
from django.contrib.auth import models as auth_model
from datetime import timedelta
from django.utils import timezone
# Create your models here.

class User(auth_model.User,auth_model.PermissionsMixin):

    def __str__(self):
        return '@{}'.format(self.username)

def get_default_date():
        return timezone.now() + timedelta(minutes=30)

class JWT_token(models.Model):
    token = models.CharField(max_length=100)
    user = models.ForeignKey(auth_model.User,related_name='user_token')
    expiry = models.DateTimeField(default=get_default_date())

    def __str__(self):
        return self.user.username

    class Meta:
        ordering = ['-expiry']
