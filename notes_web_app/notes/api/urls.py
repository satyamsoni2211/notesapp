from django.conf.urls import url
from . import views
# from django.views.decorators.csrf import csrf_exempt


urlpatterns = [
    url(r'^list/$',views.NotesListView.as_view(),name='notes-list'),
    url(r'^Notes/(?P<pk>\d+)/$',views.UpdateViewNotes,name='update-notes'),
    url(r'^create/$',views.CreateNote,name='create-note'),
    url(r'^delete/(?P<pk>\d+)/$',views.DeleteNote,name='delete-note'),
    url(r'^sharenote/$',views.ShareNotes,name='share-note'),
]