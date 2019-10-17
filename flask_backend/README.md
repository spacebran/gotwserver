What the flask app does:
1) frontend calls the flask service
    /add?uuid={uuid}&name={name}&timestamp={timestamp}

2) flask app adds this to the database

HOW TO RUN:
1. cd into flask_backend
2. pip install mysql-connector-python flask (if you havent already)
3. py app.py