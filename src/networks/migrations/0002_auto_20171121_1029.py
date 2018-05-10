# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2017-11-21 08:29
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('networks', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='network',
            name='enzyme',
        ),
        migrations.RemoveField(
            model_name='network',
            name='epigenetic_regulator',
        ),
        migrations.RemoveField(
            model_name='network',
            name='gpcr',
        ),
        migrations.RemoveField(
            model_name='network',
            name='ic50',
        ),
        migrations.RemoveField(
            model_name='network',
            name='ion_channel',
        ),
        migrations.RemoveField(
            model_name='network',
            name='kd',
        ),
        migrations.RemoveField(
            model_name='network',
            name='ki',
        ),
        migrations.RemoveField(
            model_name='network',
            name='mutated_target',
        ),
        migrations.RemoveField(
            model_name='network',
            name='nuclear_receptor',
        ),
        migrations.RemoveField(
            model_name='network',
            name='other_proteins',
        ),
        migrations.RemoveField(
            model_name='network',
            name='potency',
        ),
        migrations.RemoveField(
            model_name='network',
            name='transporter',
        ),
        migrations.AddField(
            model_name='network',
            name='settings',
            field=models.TextField(blank=True, null=True),
        ),
    ]