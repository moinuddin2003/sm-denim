from django.db import models

class Person(models.Model):
    name = models.CharField(max_length=100)
    father_name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, blank=True)
    phone_number = models.CharField(max_length=15, blank=True)
    address = models.TextField(blank=True)
    city = models.CharField(max_length=50, blank=True)
    occupation = models.CharField(max_length=100, blank=True)
    age = models.IntegerField(null=True, blank=True)
    cnic = models.CharField(max_length=20, blank=True)
    date_added = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name