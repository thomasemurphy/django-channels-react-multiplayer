# Generated by Django 2.1.7 on 2019-06-27 01:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0014_gameplayer'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='message',
            name='game',
        ),
        migrations.RemoveField(
            model_name='message',
            name='user',
        ),
        migrations.RemoveField(
            model_name='game',
            name='users',
        ),
        migrations.DeleteModel(
            name='Message',
        ),
    ]