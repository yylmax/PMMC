from flask import Flask, jsonify, request, render_template
import requests
import openai


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


@app.route("/reciperm", methods=["GET"])
def get_recipe2():
    ingredient = request.args.get("query")
    openai.api_key = "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"

    data = openai.ChatCompletion.create(
      model="gpt-3.5-turbo",
      messages=[{"role": "system", "content": "can I have some menu for " + ingredient + "?"}]
    )

    return jsonify(data)


if __name__ == "__main__":
    app.run(debug=True)