from ..common import *
from flask import send_file

def transformImage(image_binary_data):
	return image_binary_data

class transform(Resource):
	def post(self):
		if not request.data:
			return Response(status=200)
		response = Response(status=200, mimetype='image/png')
		response.data = transformImage(request.data)
		return response