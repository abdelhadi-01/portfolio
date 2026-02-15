from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import SiteSettings, SocialLink, SkillCategory, Experience, Project
from .serializers import (
    SiteSettingsSerializer, SocialLinkSerializer,
    SkillCategorySerializer, ExperienceSerializer, ProjectSerializer
)

@api_view(["GET"])
def portfolio_data(request):
    settings = SiteSettings.objects.first() or SiteSettings.objects.create()
    data = {
        "settings": SiteSettingsSerializer(settings).data,
        "socials": SocialLinkSerializer(SocialLink.objects.all(), many=True).data,
        "skills": SkillCategorySerializer(SkillCategory.objects.prefetch_related("skills").all(), many=True).data,
        "experiences": ExperienceSerializer(Experience.objects.all(), many=True).data,
        "projects": ProjectSerializer(Project.objects.all(), many=True).data,
    }
    return Response(data)
