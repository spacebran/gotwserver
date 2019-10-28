import flask
from flask_cors import CORS
from helper import *

app = flask.Flask(__name__)
CORS(app)


@app.route("/")
def _():
    return flask.jsonify({"hello":"world"})

""" This api addes one entry to te logs table """
@app.route("/api/addLog")
def addLog_():
    args = flask.request.args
    uuid = args.get("uuid")
    name = args.get("name")
    timestamp = args.get("timestamp")

    try:
        addLog(uuid, name, timestamp)
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


@app.route("/api/getLogs")
def getLogs_():
    try:
        return flask.jsonify(getLogs())
    except Exception as err:
        return flask.jsonify({"status":"failure", "error":str(err)})


@app.route("/api/getBuslist")
def getBuslist_():
    try:
        return flask.jsonify(getBuslist())
    except Exception as err:
        return flask.jsonify({"status":"failure", "error":str(err)})

@app.route("/api/setBuslist")
def setBuslist_():
    try:
        args = flask.request.args
        buslist = [i.strip() for i in args.get("buslist").split(",")]
        return flask.jsonify(setBuslist(buslist))
    except Exception as err:
        return flask.jsonify({"status":"failure", "error":str(err)})

@app.route("/api/getWhitelist")
def getWhitelist_():
    try:
        return flask.jsonify(getWhitelist())
    except Exception as err:
        return flask.jsonify({"status":"failure", "error":str(err)})

@app.route("/api/setWhitelist")
def setWhitelist_():
    try:
        args = flask.request.args
        whitelist = [i.strip() for i in args.get("whitelist").split(";")]
        return flask.jsonify(setWhitelist(whitelist))
    except Exception as err:
        return flask.jsonify({"status":"failure", "error":str(err)})


if __name__ == "__main__": 
    app.run(debug=True)