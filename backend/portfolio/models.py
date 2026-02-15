from django.db import models

class SiteSettings(models.Model):
    full_name = models.CharField(max_length=120, default="Abdelhadi ELIDRISSI")
    title = models.CharField(max_length=180, default="Ingénierie Informatique & Réseaux (MIAGE)")
    location = models.CharField(max_length=120, default="Casablanca, Maroc")
    email = models.EmailField(default="elabdolhadi@gmail.com")
    phone = models.CharField(max_length=40, default="+212 7 66 60 81 50")
    headline = models.CharField(max_length=240, default="Je construis des solutions web & SI orientées performance.")
    about = models.TextField(default="Profil orienté solution : autonomie, rigueur, esprit d’analyse et travail d’équipe.")
    internship_note = models.CharField(max_length=220, default="Stage PFA : 2 mois à partir de juin 2026.")
    cv_url = models.CharField(max_length=255, default="")
    avatar_url = models.CharField(max_length=255, blank=True, default="")

    def __str__(self):
        return "Site Settings"

class SocialLink(models.Model):
    name = models.CharField(max_length=60)
    url = models.URLField()
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["order"]

    def __str__(self):
        return self.name

class SkillCategory(models.Model):
    name = models.CharField(max_length=80)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["order"]

    def __str__(self):
        return self.name

class Skill(models.Model):
    category = models.ForeignKey(SkillCategory, on_delete=models.CASCADE, related_name="skills")
    name = models.CharField(max_length=80)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["order"]

    def __str__(self):
        return self.name

class Experience(models.Model):
    company = models.CharField(max_length=120)
    role = models.CharField(max_length=120)
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    description = models.TextField(blank=True, default="")
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["order"]

    def __str__(self):
        return f"{self.company} — {self.role}"

class Project(models.Model):
    name = models.CharField(max_length=140)
    stack = models.CharField(max_length=240, blank=True, default="")
    description = models.TextField(blank=True, default="")
    tags = models.CharField(max_length=240, blank=True, default="")
    link = models.URLField(blank=True, default="")
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["order"]

    def __str__(self):
        return self.name
