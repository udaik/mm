import requests
import json
import pprint


def create_user():
    username = "s.udaikiran@gmail.com"
    payload = {
        'mmUserName': username,
        'password': 'password',
        'password2': 'password'
    }

    r = requests.post(
        'http://localhost:8080/api/v0.1/auth/register', data=payload)

    if r.status_code != 200:
        return None
    
    pprint.pprint(r.json())
    user = r.json()
    return user['_id']


def create_account(id, type, data):
    url = 'http://localhost:8080/api/v0.1/user/' + str(id) + '/account/' + type
    r = requests.put( url, data=data)
    pprint.pprint(r.json())
    
userId = create_user()
if userId == None:
    exit(0)

pprint.pprint(userId)

sbi_savings = {
    'userId': userId,
    'mmAccountName': "SBI-Savings",
    'rateOfInterest': 3.0,
    'averageMonthlyBalance': 0.0,
    'balance': 0.0,
    'isActive': 1,
    'bankAccountId' : '00000020077230265',
    'accountHolderName' : 'Mr. VENKATA UDAY KIRAN S',
    'description' : 'SBCHQ-CSA-PUB-IND-CSPLT-INR'
}
create_account(userId, 'BANK', sbi_savings)

sbi_joint_account = {
    'userId': userId,
    'mmAccountName': "SBI-Joint",
    'rateOfInterest': 3.5,
    'averageMonthlyBalance': 0.0,
    'balance': 0.0,
    'isActive': 1,
    'bankAccountId' : '00000020095397245',
    'accountHolderName' : 'Mrs. ANUSHA NAGENDLA',
    'description' : 'SBCHQ-GEN-PUB-IND-PBB-INR',
    'mmCreditCardName' : 'test'
}
create_account(userId, 'BANK', sbi_joint_account)

sbi_loan = {
    'userId': userId,
    'mmAccountName': "SBI-HomeLoan",
    'rateOfInterest': 8.65,
    'averageMonthlyBalance': 0.0,
    'balance': 0.0,
    'isActive': 1,
    'bankAccountId' : '00000034497003740',
    'accountHolderName' : 'Mrs. ANUSHA NAGENDLA',
    'description' : 'MC-SBI HL MAXGAIN (WOM) JUN 17',
    'bookBalance' : 0,
    'availableBalance' : 0,
    'drawingPower' : 0
}

def bankAccountGet(userId, type, data):
    url = 'http://localhost:8080/api/v0.1/user/' + str(id) + '/account/' + type
    r = requests.get(url, data=data)
    pprint.pprint(r.json())

bankAccountGet(userId, 'BANK', {})
# create_account(userId, 'OD', sbi_loan)
