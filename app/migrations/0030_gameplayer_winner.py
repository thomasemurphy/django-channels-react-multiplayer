# Generated by Django 2.1.7 on 2019-08-12 23:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0029_auto_20190812_2250'),
    ]

    operations = [
        migrations.AddField(
            model_name='gameplayer',
            name='winner',
            field=models.BooleanField(default=False),
        ),
    ]