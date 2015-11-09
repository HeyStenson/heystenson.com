function changeBackgroundImages () {
	var images = [
		"img/love.jpg",
		"img/hey.jpg",
		"img/glare.jpg",
		"img/smug-jack.JPG",
		"img/look.jpg",
		"img/yawn.jpg",
		"img/glare.jpg"
	]

	var i = 0;
	setInterval(function(){
		if (i === images.length - 1) {
			i = 0;
		}
		var url = 'url( ' + images[i] +')';
		$("#title").css("background-image", 
			url);
		$("#title").css("background-repeat", 'no-repeat');
		i++;
	}, 700);
}


$(document).ready(function(){
	changeBackgroundImages();
});
