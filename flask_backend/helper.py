import mysql.connector as mc

def addLog(uuid, name, timestamp):
    conn = mc.connect(user="root", password="", host="127.0.0.1", database="iot")
    cursor = conn.cursor(dictionary=True) 
    query = f"INSERT INTO logs(uuid, name, timestamp) VALUES('{uuid}', '{name}', '{timestamp}');"
    cursor.execute(query) 
    conn.commit()
    conn.close()
    cursor.close()

def getLogs():
    conn = mc.connect(user="root", password="", host="127.0.0.1", database="iot")
    cursor = conn.cursor(dictionary=True)
    query = "select * from logs"
    cursor.execute(query)
    data = []
    for i in cursor:
        data.append(i)
    conn.close()
    return data

def getWhitelist():
    conn = mc.connect(user="root", password="", host="127.0.0.1", database="iot")
    cursor = conn.cursor(dictionary=True)
    query = "select * from whitelist"
    cursor.execute(query)
    data = []
    for i in cursor:
        data.append(i)
    conn.close()
    return data

def setWhitelist(whitelist):
    conn = mc.connect(user="root", password="", host="127.0.0.1", database="iot")
    cursor = conn.cursor(dictionary=True)

    query = "delete from whitelist"
    cursor.execute(query)
    conn.commit()

    query = "insert into whitelist(uuid, name) values"
    for line in whitelist:
        uuid,name = line.split(",")
        query += f"('{uuid}','{name}'),"
    query = query[:-1]

    cursor.execute(query)
    conn.commit()
    conn.close()
    return {"status":"set whitelist successful", "whitelist":getWhitelist()}    

def getBuslist():
    conn = mc.connect(user="root", password="", host="127.0.0.1", database="iot")
    cursor = conn.cursor(dictionary=True)
    query = "select * from buslist"
    cursor.execute(query)
    data = []
    for i in cursor:
        data.append(i)
    conn.close()
    return data

def setBuslist(buslist):
    conn = mc.connect(user="root", password="", host="127.0.0.1", database="iot")
    cursor = conn.cursor(dictionary=True)

    query = "delete from buslist"
    cursor.execute(query)
    conn.commit()

    query = "insert into buslist(name) values"
    for name in buslist:
        query += f"('{name}'),"
    query = query[:-1]

    cursor.execute(query)
    conn.commit()
    conn.close()
    return {"status":"set buslist successful", "buslist":getBuslist()}