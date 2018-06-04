from rest_framework import generics
from rest_framework.decorators import api_view, renderer_classes
from .serializers import NotesSerializer, UserSerializer
from notes.models import Notes, SharedNotes
from django.contrib.auth import get_user_model
from rest_framework import mixins
# from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
# from braces.views import CsrfExemptMixin
from rest_framework.response import Response
from django.utils.decorators import method_decorator
from rest_framework_jwt.views import ObtainJSONWebToken
# from rest_framework.authtoken.models import Token
from rest_framework_jwt.settings import api_settings
from accounts.models import JWT_token
from rest_framework import serializers
from django.contrib.auth.models import User
from django.http import JsonResponse
from rest_framework import status


class CustomAuthToken(ObtainJSONWebToken):

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']

        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

        payload = jwt_payload_handler(user)
        token = jwt_encode_handler(payload)
        print(request.path)

        create_token = JWT_token.objects.create(token=token, user=user)
        create_token.save()
        # request.session['token'] = token
        resp = Response({
            'token': token,
            'user_id': user.pk,
            'email': user.email
        })
        resp.set_cookie('token', token)
        return resp


class NotesListView(generics.ListAPIView):  # ,mixins.CreateModelMixin
    serializer_class = NotesSerializer
    model = Notes

    def get_queryset(self):
        # qs = super(NotesListView, self).get_queryset()
        qs = Notes.objects.filter(
            user__username__iexact=self.request.user.username)
        return qs


@api_view(['GET', 'POST'])
@renderer_classes((JSONRenderer,))
def UpdateViewNotes(request, pk=None):
    Note = Notes.objects.get(pk=pk)
    serialized_data = NotesSerializer(Note)
    obj = {'Notes': 'Please use post method to update Notes'}
    for k, v in serialized_data.data.items():
        obj[k] = v
    if request.method == 'POST':
        print(request.data)
        if request.data.get('text', None):
            Note.text = request.data['text']
            Note.save()
            serialized_data = NotesSerializer(Note)
            return Response(serialized_data.data)
        else:
            return Response({'Error': 'Not a valid Json'})
    return Response(obj)


@api_view(['POST'])
@renderer_classes((JSONRenderer,))
def CreateNote(request):
    if request.method == 'POST':
        user = request.user
        print(request.body)
        title = request.data.get('title')
        text = request.data.get('text')
        note = Notes.objects.create(title=title, user=user, text=text)
        note.save()
        serializer = NotesSerializer(note)
        return Response(serializer.data)


@api_view(['POST'])
@renderer_classes((JSONRenderer,))
def DeleteNote(request, pk=None):
    if request.method == 'POST':
        user = request.user
        note = Notes.objects.get(pk=pk)
        note.delete()
        return Response({'detail': 'deletedNote'})


@api_view(['GET', 'POST'])
@renderer_classes((JSONRenderer,))
def ShareNotes(request):
    if request.method == 'GET':
        notes = NotesSerializer(Notes.objects.filter(
            user__username__iexact=request.user.username), many=True)
        user = UserSerializer(User.objects.exclude(
            username__iexact=request.user.username), many=True)
        print(notes, user)
        return JsonResponse({'notes': notes.data, 'users': user.data})
    if request.method == 'POST':
        noteid = request.data.get('id')
        username = request.data.get('username')[0]
        note = SharedNotes.objects.get(note__id=noteid,user__username=username)
        if note:
            return Response({'details': 'Note already Shared'},status=status.HTTP_409_CONFLICT)
        print(noteid,username)
        shareNote = SharedNotes.objects.create(note=Notes.objects.get(id=noteid),
                                               user=User.objects.get(username=username), shared_by=request.user.username)
        shareNote.save()
        return Response({'details': 'Note Shared Successfully'})
