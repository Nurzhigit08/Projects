from django.contrib import admin
from .models import TestResult

@admin.register(TestResult)
class TestResultAdmin(admin.ModelAdmin):
    list_display = ('student_first_name', 'student_last_name', 'test_name', 'score', 'test_date')
    search_fields = ('student_first_name', 'student_last_name', 'test_name')
    list_filter = ('test_date',)
