# Generated by Django 5.0.2 on 2024-04-15 18:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('webapp', '0003_myaccount_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='myaccount',
            name='user',
        ),
    ]