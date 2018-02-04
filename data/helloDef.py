import json
import pymysql

def printMe():
    d = {'Name': 'Runoob', 'Age': 7, 'Class': 'First', 'status': 'true'}

    # 打开数据库连接
    db = pymysql.connect(host='127.0.0.1', port=3306, user='root', passwd='', db='python3')

    # 使用 cursor() 方法创建一个游标对象 cursor
    cursor = db.cursor()

    # 使用 execute()  方法执行 SQL 查询
    cursor.execute("SELECT VERSION()")

    # 使用 fetchone() 方法获取单条数据.
    data = cursor.fetchone()

    print("Database version : %s " % data)

    # 关闭数据库连接
    db.close()
    return json.dumps(d)
