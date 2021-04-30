from flask import Flask
from flask_restful import Api
from flask_cors import CORS

from loadApi import loadApi

app = Flask(__name__)
CORS(app)

api = Api(app)

loadApi(
	app=app,
	api_prefix='',
	endpoints_dir='endpoints'
)

if __name__ == '__main__':
	app.run('localhost', port=8001)