from flask import Flask, request, jsonify
import requests
from flask_cors import CORS
from winotify import Notification, audio
import os

API_KEY = os.getenv("APIKEY")
NEWS_APIKEY = os.getenv("NEWS_APIKEY")

app = Flask(__name__)
CORS(app)


@app.route('/all/<int:id>', methods=['GET'])
def homepage(id):
    # dataHome = requests.get(f'https://inshorts.me/news/all?offset={page}&limit=10').json()
    dataHome = requests.get(
        f'https://newsapi.org/v2/top-headlines?country=in&pageSize={5}&page={id}&apiKey={NEWS_APIKEY}').json()
    return jsonify(dataHome)


@app.route('/search/<term>/<int:id>', methods=['GET'])
def search(term, id):
    # print(term, id)
    # data = requests.get(f"https://inshorts.me/news/search?query={term}&offset={page}&limit=10").json()
    # f"https://inshorts.me/news/search?query={termed}&offset=0&limit=10")
    # 'https://inshorts.me/news/search?query=', termed, '&offset=', 0, '&limit=', 10')

    data = requests.get(
        f'https://newsapi.org/v2/everything?q={term}&pageSize={5}&page={id}&apiKey={NEWS_APIKEY}').json()
    return jsonify(data)


@app.route('/topics/<term>/<int:id>', methods=['GET'])
def topic(term, id):
    # data = requests.get(f"https://inshorts.me/news/topics/{term}?offset={page}").json()

    data = requests.get(
        f'https://newsapi.org/v2/everything?q={term}&pageSize={5}&page={id}&apiKey={NEWS_APIKEY}').json()
    return jsonify(data)


@app.route('/<int:id>', methods=['GET'])
def page(id):
    # print(id)
    # data = requests.get(f"https://inshorts.me/news/all?offset={id}&limit=10").json()

    data = requests.get(
        f"https://newsapi.org/v2/everything?pageSize={5}&page={id}&apiKey={NEWS_APIKEY}")
    return jsonify(data)


@app.route('/weather/<place>', methods=['GET'])
def weather(place):
    data = requests.get(
        f'https://api.openweathermap.org/data/2.5/weather?q={place}&appid={API_KEY}&units=metric').json()
    return jsonify(data)


@app.route('/weather', methods=['GET'])
def weatherMobile():
    data = requests.get(
        'https://api.openweathermap.org/data/2.5/weather?q=vadodara&appid={API_KEY}&units=metric').json()
    return jsonify(data)


# def NotifyFetch():
#     dataNotifyFetch = requests.get(
#         f'https://inshorts.me/news/all?offset=0&limit=10').json()
#     return dataNotifyFetch


# dataNotify = NotifyFetch()
# articles = dataNotify['data']['articles'][0]['title']
# images = dataNotify['data']['articles'][0]['imageUrl']
# sourceUrl = dataNotify['data']['articles'][0]['sourceUrl']
# print(sourceUrl)
# sourceUrl
# imageUrl


# def toastFunc():
#     toast = Notification(app_id="Inshorts", title=articles,
#                          duration="short",
#                          icon="D:\\College\\MCA\\sem2\\python\\project\\ztime\\frontend\\public\\images\\inshortlogoedited1.png",
#                          launch="http://localhost:3000")

#     toast.add_actions(label="Read More", launch="http://localhost:3000")
#     toast.set_audio(audio.SMS, loop=False)
#     toast.show()


# toastFunc()

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000, debug=True)


# def timer(interval):
#     while True:
#         toastFunc()
#         time.sleep(interval)

# timer(300)
