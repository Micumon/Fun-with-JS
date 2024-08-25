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

if __name__ == '__main__':
    app.run(debug=True)
