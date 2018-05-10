"""cmap URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.9/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Import the include() function: from django.conf.urls import url, include
    3. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""

from django.conf.urls import include, url
from django.contrib import admin
from . import views

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', views.home, name='home'),
    url(r'^search', views.search, name='search'),
    url(r'^help', views.help, name='help'),
    url(r'^api/data/ccle/$', views.getCcle,name='api-data-ccle'),
    url(r'^api/data/cellLine/$', views.getCellLines,name='api-data-cellLine'),
    url(r'^api/data/gdsc/$', views.getGdsc,name='api-data-gdsc'),
    url(r'^api/data/genetech/$', views.getGeneTech,name='api-data-genetech'),
    url(r'^api/data/getTargetcrf/$', views.TargetCrfInfo,name='api-data-TargetCrfInfo'),
    url(r'^api/data/getTargetDisease/$', views.TargetDiseaseinfo,name='api-data-TargetDiseaseinfo'),
    url(r'^api/data/getCompoundcrf/$', views.CompoundCrfInfo,name='api-data-CompoundCrfInfo'),
    url(r'^api/data/getClinicalInfo/$', views.ClinicalInfo,name='api-data-ClinicalInfo'),
    url(r'^networks/', include('networks.urls')),
]
