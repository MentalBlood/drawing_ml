const board = new DrawingBoard.Board('drawing-board');

const canvas = document.getElementsByClassName('drawing-board-canvas')[0];
const transformed_image = document.getElementById('transformed-image');

const server_address = 'http://localhost:8001/transform';

function transform() {
	canvas.toBlob(blob => {
		fetch(server_address, {
			method: 'POST',
			body: blob
		})
		.then(response => response.blob())
		.then(blob => transformed_image.src = URL.createObjectURL(blob))
	}, 'image/png');
}

function download() {
	const link = document.createElement('a');
	link.download = 'image.png';
	link.href = transformed_image.src;
	link.click();
	link.remove();
}