import requests
import json
import pprint

pprint.pprint(payload)
r = requests.post('http://localhost:8080/api/v0.1/users/register', data=payload)

pprint.pprint(r.status_code)
pprint.pprint(r.json())
