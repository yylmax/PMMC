from flask import Flask, jsonify, request, render_template
import requests
import openai
import store
import os


app = Flask(__name__, static_url_path='', static_folder='foodapp/build')

@app.route("/")
def index():
    return app.send_static_file('index.html')

@app.route("/login", methods=["POST"])
def indexlogin():
    userName = request.args.get("username")
    return app.send_static_file('index.html')

@app.route("/login", methods=["GET"])
def Userlogin():
    return app.send_static_file('index.html')


@app.route("/recipe", methods=["GET"])
def get_recipe():
    ingredient = request.args.get("query")
    userName = request.args.get("username")
    data = None
    if store.checkExistence(ingredient,userName):
        data = store.loadFood(ingredient,userName)
    else:
        api_key = "03ddc246f52b4243ab132773e2452ef2"
        number = 100
        url = f"https://api.spoonacular.com/recipes/complexSearch?apiKey={api_key}&query={ingredient}&number={number}"
        response = requests.get(url)
        data = response.json()
        store.storeFood(data, ingredient,userName)
        data = store.loadFood(ingredient,userName )
    return jsonify({'results' : data})

@app.route("/like", methods=["POST"])
def like():
    query = request.args.get("query")
    id = request.args.get("id")
    userName = request.args.get("username")
    print(id, userName, flush=True)
    return jsonify({'result' : store.addLike(id, userName, query)})


@app.route("/reciperm", methods=["GET"])
def get_recipe2():
    ingredient = request.args.get("query")
    openai.api_key = "placeHolder"

    data = openai.ChatCompletion.create(
      model="gpt-3.5-turbo",
      messages=[{"role": "system", "content": "can I have some menu for " + ingredient + "?"}]
    )

    return jsonify(data)


if __name__ == "__main__":
    app.run(debug=True)