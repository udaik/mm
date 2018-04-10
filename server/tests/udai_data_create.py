import requests
import json
import pprint

def user_create():
    payload = {
        'username': "s.udaikiran@gmail.com",
        'password': 'password',
        'password2': 'password'
    }
    r = requests.post('http://localhost:8080/api/v0.1/auth/register', data=payload)
    pprint.pprint(r.status_code)
    pprint.pprint(r.json())

user_create()

""""
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

userId = "5ab6ae7587268b3269f9f471"
acnt_type = "BANK"

url = 'http://localhost:8080/api/v0.1/user/'+userId+'/account/'+acnt_type

print(url)

data = {
    'data': {
        'name': 'test100',
        'balance': 1400,
        'rateOfInterest': 3.5,
        'isActive': True,
        'accountNumber' : '00000020077230265',
        'amb' : 0.0,
    }
}

r = requests.put(url, json=data)
pprint.pprint(r.status_code)
pprint.pprint(r.json())

data = {
    'type': 'BANK_ACCOUNT',
}
r = requests.get(url, json=data)


r = requests.post(url, json=data)
pprint.pprint(r.status_code)
pprint.pprint(r.json())


r = requests.delete(url, json=data)
pprint.pprint(r.status_code)
pprint.pprint(r.json())
"""