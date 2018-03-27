import requests
import json
import pprint


"""
for i in range(10):
    username = "udaikiran"+ str(i) +"@udaikiran.com"
    payload = {
        'username': username,
        'password': 'password',
        'password2': 'password'
    }

    # pprint.pprint(payload)
    r = requests.post(
        'http://localhost:8080/api/v0.1/auth/register', data=payload)
    # pprint.pprint(r.status_code)
    # pprint.pprint(r.json())
"""

# get all 
# r = requests.get('http://localhost:8080/api/v0.1/users/user')
# pprint.pprint(r.status_code)
# pprint.pprint(r.json())

# r = requests.get('http://localhost:8080/api/v0.1/users/user/5ab6b1c5b65aa334f40a1b14/')
r = requests.get('http://localhost:8080/api/v0.1/users/user/5ab6b1c5b65aa334f40a1b14/')
r = requests.get('http://localhost:8080/api/v0.1/users/user/udaikiran@udaikiran.com/')
pprint.pprint(r.status_code)
pprint.pprint(r.json())