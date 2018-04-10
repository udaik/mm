import requests
import json
import pprint

for i in range(10):
    username = "udaikiran"+ str(i) +"@udaikiran.com"
    payload = {
        'username': username,
        'password': 'password',
        'password2': 'password'
    }

    pprint.pprint(payload)
    r = requests.post(
        'http://localhost:8080/api/v0.1/auth/register', data=payload)
    pprint.pprint(r.status_code)
    pprint.pprint(r.json())
