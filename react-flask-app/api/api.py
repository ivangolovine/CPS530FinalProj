import time
import os
from flask import Flask, render_template, redirect, url_for, request, json
from flask.globals import session
from flask.wrappers import Request

app = Flask(__name__)

#@app.route('/api', methods=['GET'])
#def index():
#	return {"username" : "admin", "password" : "password123" }

@app.route('/api/submit', methods=['GET','POST'])
def submit():
	request_data = json.loads(request.data)
	if request_data['un'] != 'admin':
		return {"msg": "wrong username, The right username is admin"}
	elif request_data['pass'] != 'password123':
		return {"msg" : "wrong password, the right password is password123"}
	else: #testing "tmpClode": "true"
		return { "anim": "https://media.giphy.com/media/Id6dC0GQOOzPMXgcPv/giphy.gif",
			"msg": "https://image.shutterstock.com/image-vector/welcome-poster-spectrum-brush-strokes-260nw-1146069941.jpg"
		}
#logout
#@app.route('/api/logout')
#def logout():


@app.route('/api/time')
def get_current_time():
	return {'time': time.strftime('%l:%M%p %Z on %b %d, %Y')}


#runs the app
if __name__ == "__main__":
	app.run(debug=True)

'''
#catch if the user did not enter a proper name or location before returning
#Even if the user changes the html for the location it will check the list and return failure
#used to fill out the template of persons location
LOCATIONS = [
	"Ontario",
	"Quebec",
	"Manitoba",
	"Saskatchewan",
	"Yukon"
]

@app.route('/greet', methods=["POST"])
def succes():
	if not request.form.get("username") == "admin" or not request.form.get("password") == "password123" or request.form.get("location") not in LOCATIONS:
		return render_template("failure.html")
	return render_template('greet.html', User=request.form.get("username", "Bob"), Location_ret=request.form.get("location", "N/A") )

#You can get the current time
@app.route('/api/time')
def get_current_time():
	return {'time': time.time()}

#You can get an argument from the top of the url by adding ?name = Mike after the slash
#Allows us to Dynamically generate things
#To get remove methods post and change request.form to request.args
@app.route('/', methods=["GET", "POST"])
def index():
	if request.method == "GET":
		return render_template('index.html')
	if request.method == "POST":
		return render_template('greet.html', name=request.form.get("name", "Bob"), Location=request.form.get("Location", "N/A") )

#To get remove methods post and change request.form to request.args
@app.route('/greet', methods=["POST"])
def greet():
	return render_template('greet.html', name=request.form.get("name", "Bob"))

@app.route('/members')
def members():
	return {"members": ["Member1", ["Members2"], ["Member3"]]}

'''