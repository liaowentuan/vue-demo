import json
import pymysql

def printMe():
    d = {'Name': 'Runoob', 'Age': 7, 'Class': 'First', 'status': 'true'}
    return json.dumps(d)
