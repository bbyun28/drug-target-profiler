from __future__ import unicode_literals
from networks.random_primary import RandomPrimaryIdModel
from django.db import models
# # Create your models here.
class Network(RandomPrimaryIdModel):

    search_terms = models.TextField(null=True,blank=True)
    settings = models.TextField(null=True,blank=True)
    is_range = models.TextField(null=True,blank=True)
    data_file = models.FileField(upload_to='uploads/',null=True,blank=True)


def filename(self):
    return os.path.splitext(os.path.basename(self.data_file.name))[0]