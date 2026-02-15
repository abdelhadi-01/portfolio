from django.contrib import admin
from .models import SiteSettings, SocialLink, SkillCategory, Skill, Experience, Project

admin.site.register(SiteSettings)
admin.site.register(SocialLink)
admin.site.register(SkillCategory)
admin.site.register(Skill)
admin.site.register(Experience)
admin.site.register(Project)
