from helpers.common import *
import mysql.connector as mc

def connect():
    conn = mc.connect(user=env("DB_USER"), password=env("DB_PASSWORD"), host=env("DB_HOST"), database=env("DB"))
    cursor = conn.cursor(dictionary=True) 
    return conn, cursor

def addLog(uuid, name, timestamp):
    conn, cursor = connect()
    query = "INSERT INTO logs(uuid, name, timestamp) VALUES(%s, %s, %s)"
    cursor.execute(query, (uuid, name, timestamp)) 
    conn.commit()
    conn.close()
    cursor.close()

def getLogs():
    conn, cursor = connect()
    query = "select * from logs"
    cursor.execute(query)
    data = []
    for i in cursor:
        data.append(i)
    conn.close()
    return data

def getWhitelist():
    conn, cursor = connect()
    query = "select * from whitelist"
    cursor.execute(query)
    data = []
    for i in cursor:
        data.append(i)
    conn.close()
    return data

def setWhitelist(whitelist):
    conn, cursor = connect()
    query = "delete from whitelist"
    cursor.execute(query)
    conn.commit()

    query = "insert into whitelist(uuid, name) values (%s, %s)"

    cursor.executemany(query, [i.split(",") for i in whitelist])
    conn.commit()
    conn.close()
    return {"status":"set whitelist successful", "whitelist":getWhitelist()}    

def getBuslist():
    conn, cursor = connect()
    query = "select * from buslist"
    cursor.execute(query)
    data = []
    for i in cursor:
        data.append(i)
    conn.close()
    return data

def setBuslist(buslist):
    conn, cursor = connect()
    query = "delete from buslist"
    cursor.execute(query)
    conn.commit()

    query = "insert into buslist(name) values ( %s )"

    cursor.executemany(query, [(i,) for i in buslist])
    conn.commit()
    conn.close()
    return {"status":"set buslist successful", "buslist":getBuslist()}
