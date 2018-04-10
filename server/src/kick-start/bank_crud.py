import requests
import json
import pprint

userId = '5ac4860c04110003f1f77994'

sbi_savings = {
    'userId': userId,
    'mmAccountName': "SBI-Savings",
    'rateOfInterest': 3.0,
    'averageMonthlyBalance': 0.0,
    'balance': 0.0,
    'isActive': 1,
    'bankAccountId': '00000020077230265',
    'accountHolderName': 'Mr. VENKATA UDAY KIRAN S',
    'description': 'SBCHQ-CSA-PUB-IND-CSPLT-INR'
}

url = 'http://localhost:8080/api/v0.1/user/' + str(userId) + '/account/BANK'
r = requests.put(url, data=sbi_savings)
print("sbi savings len", len(r.json()), userId)
resp = r.json()
acnt1 = resp['_id']

sbi_joint_account = {
    'userId': userId,
    'mmAccountName': "SBI-Joint",
    'rateOfInterest': 3.5,
    'averageMonthlyBalance': 0.0,
    'balance': 0.0,
    'isActive': 1,
    'bankAccountId': '00000020095397245',
    'accountHolderName': 'Mrs. ANUSHA NAGENDLA',
    'description': 'SBCHQ-GEN-PUB-IND-PBB-INR',
    'mmCreditCardName': 'test'
}
url = 'http://localhost:8080/api/v0.1/user/' + str(userId) + '/account/BANK'
r = requests.put(url, data=sbi_joint_account)
# print( "sbi joint len", len(r.json()), userId, r.json())
resp = r.json()
acnt2 = resp['_id']

pprint.pprint(resp['_id'])
url = 'http://localhost:8080/api/v0.1/user/' + \
    str(userId) + '/account/BANK' + '/' + resp['_id']
r = requests.get(url)
# print( "sbi get joint acnt", len(r.json()), userId, r.json())

url = 'http://localhost:8080/api/v0.1/user/' + str(userId) + '/account/BANK'
r = requests.get(url)
# print( "sbi all joint acnt", len(r.json()), userId, r.json())

sbi_joint_account = {
    'rateOfInterest': 10,
}
url = 'http://localhost:8080/api/v0.1/user/' + \
    str(userId) + '/account/BANK' + '/' + resp['_id']
r = requests.post(url, data=sbi_joint_account)
print("sbi all joint acnt", len(r.json()), userId, r.json())

# r = requests.delete(url)
# print("sbi all joint acnt", len(r.json()), userId, r.json())


trx = {
    'userId': userId,
    'description' : 'test',
    'amount' : 100,
    'creditAccount' : acnt1,
    'debitAccount' : acnt2
}

url = 'http://localhost:8080/api/v0.1/user/' + str(userId) + '/account/TRANSACTION'
r = requests.put(url, data=trx)
pprint.pprint(r.json())
