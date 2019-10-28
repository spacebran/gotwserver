HOW TO RUN:
1. cd into flask_backend
2. pip install mysql-connector-python flask flask-cors (if you havent already)
3. py app.py

==============================================================================
API
==============================================================================

GET hostname/api/addLog?uuid={uuid}&name={name}&timestamp={timestamp}
    - adds 1 log into logs database
    - id, uuid, name, timestamp

    eg output:

    {
        "payload": {
            "name": "tan ah kow", 
            "timestamp": "426483278427648324", 
            "uuid": "sample uuid"
        }, 
        "status": "success"
    }




GET hostname/api/getLogs
    - returns all logs in json format

    eg output:

    [
        {
            "id": 1, 
            "name": "liu zuo lin", 
            "timestamp": "now", 
            "uuid": "test"
        }, 
        {
            "id": 2, 
            "name": "zuolinliu", 
            "timestamp": "yagdjyawgdu", 
            "uuid": "123"
        }
    ]




GET hostname/api/getBuslist
    - returns all names of elders who are supposed to be on the bus
    - name

    eg output:
    
    [
        {
            "name": "Tan ah kow"
        }, 
        {
            "name": "tan ah neow"
        }
    ]



GET hostname/api/setBuslist?buslist={name1},{name2},{name3}
    - deletes entire buslist and inserts name1, name2 and name3 into buslist
    - returns /api/getBuslist after update




GET hostname/api/getWhitelist
    - returns whitelist
    - uuid,name
    - everyone in the eldercare centre + uuid mapping (regardless of whether on buslist)

    eg. output:

        
    [
        {
            "name": "bob tan", 
            "uuid": "dhwaiudhiauwhd"
        }, 
        {
            "name": "hehe tan", 
            "uuid": "diawudbawubda"
       }
    ]



GET hostname/api/setWhitelist?whitelist={uuid1},{name1};{uuid2},{name2};{uuid3},{name3}

    - inserts a list of (uuid, name) pairs into whitelist table
    - each pair delimited by a ";"
    - uuid and name delimited by a ","

