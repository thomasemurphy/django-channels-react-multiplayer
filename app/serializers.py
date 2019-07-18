from rest_framework import serializers

from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True)
    username = serializers.CharField(required=True)
    password = serializers.CharField(min_length=8, required=True)

    def create(self, validated_data):
        """Create and return a `User` with an email, username and password."""
        user = User(username=validated_data['username'], email=validated_data['email'])
        user.set_password(validated_data['password'])
        user.save()
        return user

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')


class LoginSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True,)
    password = serializers.CharField(min_length=8)

    class Meta:
        model = User
        fields = ('id', 'email', 'password')
