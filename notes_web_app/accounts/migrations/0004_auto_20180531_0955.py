# -*- coding: utf-8 -*-
# Generated by Django 1.11.2 on 2018-05-31 09:55
from __future__ import unicode_literals

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0003_auto_20180531_0953'),
    ]

    operations = [
        migrations.AlterField(
            model_name='jwt_token',
            name='expiry',
            field=models.DateTimeField(default=datetime.datetime(2018, 5, 31, 10, 25, 30, 844008, tzinfo=utc)),
        ),
    ]