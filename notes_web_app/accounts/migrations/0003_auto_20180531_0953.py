# -*- coding: utf-8 -*-
# Generated by Django 1.11.2 on 2018-05-31 09:53
from __future__ import unicode_literals

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_jwt_token'),
    ]

    operations = [
        migrations.AlterField(
            model_name='jwt_token',
            name='expiry',
            field=models.DateTimeField(default=datetime.datetime(2018, 5, 31, 10, 23, 1, 591713)),
        ),
        migrations.AlterField(
            model_name='jwt_token',
            name='token',
            field=models.CharField(max_length=100),
        ),
    ]
