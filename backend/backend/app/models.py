from django.db import models

# Create your models here.


class Note(models.Model):
    school = models.CharField(max_length=255, unique=True)
    course_code = models.CharField(max_length=255, unique=True)
    creation_date = models.DateField(auto_created=True)
    rating = models.IntegerField(default=0)
    notes = models.FileField()
