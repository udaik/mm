import requests
import json
import pprint

userId = "5ab6ae7587268b3269f9f471"
url = 'http://localhost:8080/api/v0.1/user/'+userId+'/account'

data = {
    'type': 'BANK_ACCOUNT',
    'data': {
        'name': 'test100',
        'balance': 1400,
        'rateOfInterest': 3.5
    }
}

pprint.pprint(json.dumps(data))
r = requests.put(url, json=data)
pprint.pprint(r.status_code)
pprint.pprint(r.json())

# data = {
#    'type': 'BANK_ACCOUNT',
# }
#r = requests.get(url, json=data)


# r = requests.post(url, json=data)
# pprint.pprint(r.status_code)
# pprint.pprint(r.json())


# r = requests.delete(url, json=data)
# pprint.pprint(r.status_code)
# pprint.pprint(r.json())

# r = requests.delete(url)
