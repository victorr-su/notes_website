from rest_framework import viewsets
# Create your views here.
from .models import Note
from .serializers import NoteSerializer


class NoteViewSet(viewsets.ModelViewSet):

    queryset = Note.objects.all()
    serializer_class = NoteSerializer
