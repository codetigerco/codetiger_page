from .base import *

# Database
# https://docs.djangoproject.com/en/1.7/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'codetiger',
        'USER': 'codetiger',
        'PASSWORD': '',
        'HOST': 'LOCALHOST',
        'PORT': '5432',
    }
}


