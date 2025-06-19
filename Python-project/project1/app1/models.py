from django.db import models


class TestResult(models.Model):
    student_first_name = models.CharField(max_length=255)
    student_last_name = models.CharField(max_length=255)
    test_name = models.CharField(max_length=255)
    score = models.IntegerField()
    max_score = models.IntegerField()
    subject = models.CharField(max_length=255, blank=False)
    reviewed = models.BooleanField(default=False)
    test_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.student_first_name} {self.student_last_name} — {self.score}/{self.max_score}"

