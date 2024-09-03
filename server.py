from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/data', methods=['POST'])
def process_data():
    # Odbierz dane z requestu JSON
    data = request.json

    print(data, "klops")
    
    # Przetwórz dane (tutaj możesz dodać logikę swojej aplikacji)
    response_data = {
        'message': f'Otrzymałem dane: {data["value"]}',
        'status': 'success'
    }
    
    # Odpowiedz JSON-em
    return jsonify(response_data)

@app.route("/api/secondData", methods=["POST"])
def anotherFunction():
    request_recieved = request.json

    response_msg = {
        "message": "Lubie Klocki lego",
        "status": "success"
    }
    return jsonify(response_msg)

@app.route("/api/formData", methods=["POST"])
def formData():
    request_recieved = request.form

    

    # return jsonify({"response":f"otrzymałem i przetwożyłem: {request_recieved['firstName']}"}){request_recieved['firstName']}{request_recieved['lastName']}
    return f"<!DOCTYPE html><h1 style='background: linear-gradient(to right,yellow,blue);background-clip:text;color:transparent;'>Udało się {request_recieved['firstName']} {request_recieved['lastName']}</h1>"

if __name__ == '__main__':
    app.run(debug=True)
