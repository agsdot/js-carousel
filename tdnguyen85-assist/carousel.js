var image = document.getElementById('image');
var imageArrayTag = document.getElementsByTagName('img');
var imageArray = [];
var tracker;
var timer;

for ( i = 0; i < imageArrayTag.length; i += 1){
	imageArray.push(imageArrayTag[i].src);
}


function fadeIn() {
	if (image.style.opacity >= 1) {
		return;
	}
	image.style.opacity = parseFloat(image.style.opacity, 10) + 0.01;
}


function next() {
	image.style.opacity = 0;
	for( i = 0; i < imageArray.length; i += 1){
		if (image.src === imageArray[i]){
			if(image.src === imageArray[imageArray.length - 1 ]){
				tracker = imageArray[0];
			}
			else {
				tracker = imageArray[i+1];
			}
		}
	}
	return (image.src = tracker);
}

function previous() {
	image.style.opacity = 0;

	for( i = 0; i < imageArray.length; i += 1 ){
		if (image.src === imageArray[i]){
			if(image.src === imageArray[0]){
				tracker = imageArray[imageArray.length -1];
			}
			else {
				tracker = imageArray[i-1]
			}
		}
	}
	return (image.src = tracker);

}





var a = document.getElementById('next');
var b = document.getElementById('previous');

a.onclick = function() {
	clearInterval(timer);
	timer = setInterval(fadeIn, 10);
	next();
	console.log(image.src);
};




b.onclick = function() {
	clearInterval(timer);
	timer = setInterval(fadeIn, 10);
	previous();
	console.log(image.src);
}
