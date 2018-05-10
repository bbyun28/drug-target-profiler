from django.conf.urls import patterns, url

from networks import views

urlpatterns = patterns('',
    url(r'^task/(?P<pk>.*)$', views.network_view, name='network_view'),
    url(r'^more_nodes/$', views.more_nodes,name='more_nodes'),
    url(r'^saveSession/$', views.saveSession,name='saveSession'),
    url(r'^preview/(?P<pk>.*)$', views.preview, name='preview'),
    url(r'^export_to_excel$', views.export_to_excel, name='export_to_excel'),
    url(r'^network$', views.network,name='network')
)