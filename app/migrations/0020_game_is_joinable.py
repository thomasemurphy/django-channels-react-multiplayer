# Generated by Django 2.1.7 on 2019-07-03 17:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [("app", "0019_auto_20190701_1931")]

    operations = [
        migrations.AddField(
            model_name="game",
            name="is_joinable",
            field=models.BooleanField(default=True),
        )
    ]
