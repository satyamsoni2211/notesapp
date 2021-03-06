from django.utils import timezone
from accounts.models import JWT_token
from jwt import DecodeError, ExpiredSignatureError
from rest_framework import status
from rest_framework_jwt.utils import jwt_decode_handler, jwt_get_username_from_payload_handler
from django.utils.deprecation import MiddlewareMixin
from rest_framework_jwt.settings import api_settings
from django.http import JsonResponse
from django.contrib.auth import authenticate

'''
This middleware validates the JWT Token passed in the cookie of the 
request received from the react front end.
'''

class NotesAppMiddlewares(MiddlewareMixin):
    def process_request(self, request):
        if 'api-token-auth' in request.path:
            print(request.POST)
            if 'username' not in request.POST:
                return JsonResponse({'details': 'Please provide username to login'}, status=401)
            else:
                print(request.POST.get('username'),
                      request.POST.get('password'))
                user = authenticate(username=request.POST.get(
                    'username'), password=request.POST.get('password'))
                if user is not None:
                    jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
                    jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

                    payload = jwt_payload_handler(user)
                    token = jwt_encode_handler(payload)

                    create_token = JWT_token.objects.create(
                        token=token, user=user)
                    create_token.save()
                    # request.session['token'] = token
                    resp = JsonResponse({
                        'token': token,
                        'user_id': user.pk,
                        'email': user.email
                    })
                    resp.set_cookie('token', token)
                    return resp
                else:
                    return JsonResponse({'details': 'invalid user/password provided'},
                                        status=status.HTTP_403_FORBIDDEN)
        else:
            if 'api' in request.path:
                current_time = timezone.now()
                access_token = request.COOKIES.get('token', None)
                if access_token is None:
                    return JsonResponse({'details': 'Not valid request, sign in again'},
                                        status=status.HTTP_401_UNAUTHORIZED)
                tokens = JWT_token.objects.filter(
                    token=access_token, expiry__gt=current_time)
                if tokens.exists():
                    try:
                        res = jwt_decode_handler(access_token)
                    except (DecodeError, ExpiredSignatureError):
                        if DecodeError:
                            resp = JsonResponse({'details': 'Not a valid digital signature, Please login again'},
                                                status=status.HTTP_401_UNAUTHORIZED)
                            resp.delete_cookie('token')
                            return resp
                        if ExpiredSignatureError:

                            resp = JsonResponse({'details': 'Token expired, Please login again'},
                                                status=status.HTTP_404_NOT_FOUND)
                            resp.delete_cookie('token')
                            return resp

                else:
                    resp = JsonResponse({'details': 'JWT Token expired, Please login again'},
                                        status=status.HTTP_404_NOT_FOUND)
                    resp.delete_cookie('token')
                    return resp
