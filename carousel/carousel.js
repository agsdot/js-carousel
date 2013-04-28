var gallery = new Array("slider1.jpg","slider2.jpg","slider4.jpg");
var img = document.getElementById('picture');
var currentimage = img.src.split('/').slice(-1)[0]
var position = gallery.indexOf(currentimage);


function next() {

	if(position <= 2) {
	img.src = gallery[position];
	position += 1;

	console.log(img.src)
	}
	if(position === 3){
		position = 0;
	}
}


function previous() {
	if(position <= 2) {
	img.src = gallery[position];
	position -= 1;

	console.log(img.src)
	}
	if(position === -1){
		position = 2;
	}
}


	var b = document.getElementById('next');
	b.onclick = function() {
		next();
	}

	var a = document.getElementById('previous');
	a.onclick = function() {
		previous();
	}


