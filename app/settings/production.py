from .base import *

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'myproductiondatabase',
        'USER': 'myporoductiondatabaseuser',
        'PASSWORD': 'mypassword',
        'HOST': 'LOCALHOST',
        'PORT': '5432',
    }
}
