from django.contrib import admin

# Register your models here.


from .models import Person

# This makes the "Person" section appear in your admin dashboard
admin.site.register(Person)