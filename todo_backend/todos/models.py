from django.db import models

class TodoItem(models.Model):
    title = models.CharField(max_length=100)
    completed = models.BooleanField(default=False)
    desc = models.CharField(max_length=300)

    def __str__(self):
        return self.title
