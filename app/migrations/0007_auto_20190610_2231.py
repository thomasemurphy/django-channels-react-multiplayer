# Generated by Django 2.1.7 on 2019-06-10 22:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [("app", "0006_auto_20190610_2229")]

    operations = [
        migrations.RemoveField(model_name="message", name="game"),
        migrations.RemoveField(model_name="message", name="user"),
        migrations.DeleteModel(name="Message"),
    ]
