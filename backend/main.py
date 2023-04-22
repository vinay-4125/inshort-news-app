from flask import Flask, request, jsonify
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/all/<int:id>', methods=['GET'])
def homepage(id):
    page = id*10
    data = requests.get(
        f'https://inshorts.me/news/all?offset={page}&limit=10').json()
    return jsonify(data)


@app.route('/search/<term>/<int:id>', methods=['GET'])
def search(term, id):
    # print(term, id)
    page = id*10
    data = requests.get(
        f"https://inshorts.me/news/search?query={term}&offset={page}&limit=10").json()
    # f"https://inshorts.me/news/search?query={termed}&offset=0&limit=10")
    # 'https://inshorts.me/news/search?query=', termed, '&offset=', 0, '&limit=', 10')
    return jsonify(data)


@app.route('/topics/<term>/<int:id>', methods=['GET'])
def topic(term, id):
    page = id*10
    data = requests.get(
        f"https://inshorts.me/news/topics/{term}?offset={page}").json()
    return jsonify(data)


@app.route('/<int:id>', methods=['GET'])
def page(id):
    # print(id)
    data = requests.get(
        f"https://inshorts.me/news/all?offset={id}&limit=10").json()
    return jsonify(data)


@app.route('/weather', methods=['GET'])
def weather():
    data = requests.get(
        'https://api.openweathermap.org/data/2.5/weather?q=vadodara&appid=98ff32537d4469edd5db80a401eeb919&units=metric').json()
    return jsonify(data)


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000, debug=True)
