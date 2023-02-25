
from flask import Flask, jsonify, request, render_template
import requests


app = Flask(__name__, static_url_path='', static_folder='foodapp/build')

@app.route("/")
def index():
    return app.send_static_file('index.html')

@app.route("/login")
def indexlogin():
    return app.send_static_file('index.html')


@app.route("/recipe", methods=["GET"])
def get_recipe():
    ingredient = request.args.get("query")
    api_key = "03ddc246f52b4243ab132773e2452ef2"
    number = 10
    url = f"https://api.spoonacular.com/recipes/complexSearch?apiKey={api_key}&query={ingredient}&number={number}"
    response = requests.get(url)
    data = response.json()
    return jsonify(data)


if __name__ == "__main__":
    app.run(debug=True)