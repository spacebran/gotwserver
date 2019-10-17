import flask
import mysql.connector as mc

app = flask.Flask(__name__)

def insert(uuid, name, timestamp):
    conn = mc.connect(user="root", password="", host="127.0.0.1", database="iot")
    cursor = conn.cursor(dictionary=True) 
    query = f"INSERT INTO logs(uuid, name, timestamp) VALUES('{uuid}', '{name}', '{timestamp}');"
    cursor.execute(query) 
    conn.commit()
    conn.close()
    cursor.close()

@app.route("/")
def _():
    return flask.jsonify({"hello":"world"})

@app.route("/add")
def add_():
    args = flask.request.args
    uuid = args.get("uuid")
    name = args.get("name")
    timestamp = args.get("timestamp")

    try:
        insert(uuid, name, timestamp)
        return flask.jsonify({
        "status":"success",
        "payload": {
            "uuid":uuid,
            "name":name,
            "timestamp":timestamp
            }
        })
    except Exception as err:
        return flask.jsonify({"status":"failure", "error":str(err)})

if __name__ == "__main__":
    app.run(debug=True)