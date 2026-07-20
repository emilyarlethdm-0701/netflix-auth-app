from django.contrib.auth import get_user_model

from rest_framework.decorators import api_view

from rest_framework.response import Response

from rest_framework import status


from rest_framework_simplejwt.views import TokenObtainPairView



User=get_user_model()



@api_view(['POST'])
def register(request):

    username=request.data.get('username')

    password=request.data.get('password')


    if User.objects.filter(username=username).exists():

        return Response(
            {
                "error":"Usuario ya existe"
            },
            status=400
        )


    user=User.objects.create_user(

        username=username,

        password=password

    )


    return Response(

        {
            "message":"Usuario creado correctamente"
        },

        status=201

    )



login=TokenObtainPairView.as_view()