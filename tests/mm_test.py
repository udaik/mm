import requests
import json

payload = {'key1': 'value1', 'key2': 'value2xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'}
r = requests.post('http://localhost:8080/bankAccount', data=payload)
