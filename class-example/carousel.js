var slider = document.getElementById('slider');

slider.style.marginLeft = 0;

function scrollFrame() {
	var startx = parseInt(slider.style.marginLeft, 10);
	var endx = startx - 1024;
	var timer;
	function animate() {
		slider.style.marginLeft = (parseInt(slider.style.marginLeft, 10) - 2) + 'px';
		x = parseInt(slider.style.marginLeft);

		console.log(x, endx);
		if (x < endx) {
			clearInterval(timer);
		}
	}

	timer = setInterval(animate, 20);

	console.log(startx);
}
	var b = document.getElementById('next');
	b.onclick = function() {
		scrollFrame();
	}

