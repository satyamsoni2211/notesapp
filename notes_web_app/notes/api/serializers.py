from rest_framework import serializers
from notes.models import Notes,SharedNotes
from accounts.models import User
# from rest_framework import

class NotesSerializer(serializers.ModelSerializer):
    
    class Meta:
        fields = ['id','title','text','created','user']
        model = Notes
        read_only_fields = ['user']

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        # fields = ['id','username']
        fields = '__all__'
        model = User
        read_only_fields = ['username']
    
class SharedNoteSerializer(serializers.ModelSerializer):
    note = NotesSerializer()
    # user = UserSerializer()
    class Meta:
        model = SharedNotes
        fields = ['note','shared_by','can_edit']

class UserNoteSerializer(serializers.ModelSerializer):
    shared_user = SharedNoteSerializer(many=True, read_only=True)

    class Meta:
        model = User
        fields = ['username','shared_user']