var image = document.getElementById('image');
var imageArrayTag = document.getElementsByTagName('img');
var imageArray = [];
var tracker;

for ( i = 0; i < imageArrayTag.length; i += 1){
	imageArray.push(imageArrayTag[i].src);
}


function next() {
	image.style.opacity = 1;
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
	image.style.opacity = 1;

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
a.onclick = function() {
	next();
	console.log(image.src);
}



var b = document.getElementById('previous');
b.onclick = function() {

	previous();
	console.log(image.src);

}
