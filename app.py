from flask import Flask, jsonify, request, render_template
import flask
import requests
import store
import os
import random
from flask_cors import CORS
import game1 as g1
import game2 as g2
#dddd

app = Flask(__name__, static_url_path='', static_folder='foodapp/build', template_folder='templates')
CORS(app)

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

@app.route("/intro", methods=["GET"])
def UserIntro():
    return app.send_static_file('index.html')

options = {}
correct_answer = ''
idx = 0


@app.route('/game1')
def game1():
    global options
    global correct_answer
    global idx
    gm1 = g1.Game1()
    options, correct_answer, idx = gm1.game1_backend()
    return render_template('index2.html', options=options)


@app.route('/game3')
def game3():
    return app.send_static_file('index.html')



'''@app.route('/game2')
def game2():
    global options
    global correct_answer
    global idx
    gm2 = g2.Game2()
    options, correct_answer, idx = gm2.game2_backend()
    return render_template('index3.html', options=options)'''



@app.route('/submit', methods=['POST', 'GET'])
def submit():
    global options
    global correct_answer
    global idx
    if flask.request.method == 'POST':
        user_answer = request.form['answer']
        result = "Correct!" if user_answer == correct_answer else "Wrong!"
        idx_dict = {1: 'A', 2: 'B', 3: 'C', 4: 'D'}
        return jsonify({'result': result, 'answer': idx_dict[idx+1]})
    else:
        return correct_answer


if __name__ == "__main__":
    app.run(debug=True)