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

app = Flask(__name__)
            #, static_url_path='', static_folder='static', template_folder='templates')
CORS(app)


@app.route("/")
def index():
    return app.send_static_file('index.html')


@app.route("/login", methods=["POST", "GET"])
def Userlogin():
    if flask.request.method == 'POST':
        userName = request.args.get("username")
    #else:
        #userName = request.form["username"]
        #print('2. username: ', userName)
    return app.send_static_file('index.html')


@app.route("/intro")
def UserIntro():
    return app.send_static_file('index.html')

options1 = {}
correct_answer1 = ''
idx1 = 0
options2 = {}
correct_answer2 = ''
idx2 = 0


@app.route('/game1')
def game1():
    global options1
    global correct_answer1
    global idx1
    gm1 = g1.Game1()
    options1, correct_answer1, idx1 = gm1.game1_backend()
    return render_template('index2.html', options=options1)


@app.route('/game2')
def game2():
    global options2
    global correct_answer2
    global idx2
    gm2 = g2.Game2()
    options2, correct_answer2, idx2 = gm2.game2_backend()
    return render_template('index3.html', options=options2)


@app.route('/game3')
def game3():
    return app.send_static_file('index.html')

@app.route('/game4')
def game4():
    return render_template('index.html')


@app.route('/submit1', methods=['POST', 'GET'])
def submit1():
    global options1
    global correct_answer1
    global idx1
    if flask.request.method == 'POST':
        user_answer = request.form['answer']
        result = "Correct!" if user_answer == correct_answer1 else "Wrong!"
        idx_dict = {1: 'A', 2: 'B', 3: 'C', 4: 'D'}
        return jsonify({'result': result, 'answer': idx_dict[idx1+1]})
    else:
        return correct_answer1


@app.route('/submit2', methods=['POST', 'GET'])
def submit2():
    global options2
    global correct_answer2
    global idx2
    if flask.request.method == 'POST':
        user_answer = request.form['answer']
        result = "Correct!" if user_answer == correct_answer2 else "Wrong!"
        idx_dict = {1: 'A', 2: 'B', 3: 'C', 4: 'D', 5: 'E', 6: 'F'}
        return jsonify({'result': result, 'answer': idx_dict[idx2+1]})
    else:
        return options2[correct_answer2][0]


if __name__ == "__main__":
    app.run(debug=True)