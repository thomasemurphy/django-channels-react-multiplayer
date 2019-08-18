import json
from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework.authentication import TokenAuthentication
from django.http import HttpResponse

from app.models import Game, Winner


class GameCreateView(APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request):
        game = Game.objects.create(room_name=request.data["room_name"])
        return HttpResponse(json.dumps(game.as_json()))


class GameListView(APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request):
        game_objects = Game.objects.all().filter(game_status="active")
        games = [g.as_json() for g in game_objects]
        return HttpResponse(json.dumps(games))


class GameGetView(APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request, id):
        game = Game.objects.get(id=id)
        return HttpResponse(json.dumps(game.as_json()))


class WinnerListView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request):
        winner_objects = Winner.objects.all().order_by("-followers")
        winners = [g.as_json() for g in winner_objects]
        return HttpResponse(json.dumps(winners))
