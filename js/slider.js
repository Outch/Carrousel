'use strict';

var set = 1;
var i = 3;
var interval;

function changeCaption()
{
	switch (i) {
		case 1:
		return document.getElementById('captionImg').innerHTML = "Street art";
		case 2:
		return document.getElementById('captionImg').innerHTML = "Bridge";
		case 3:
		return document.getElementById('captionImg').innerHTML = "Colorful building";
		case 4:	
		return document.getElementById('captionImg').innerHTML = "Night building";
		case 5:
		return document.getElementById('captionImg').innerHTML = "Night city";
		case 6:
		return document.getElementById('captionImg').innerHTML = "Eiffel tower";
	}
}

function generateRandom(min, max)
{
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    return (num === i) ? generateRandom(min, max, i) : num;
}

function randomImg()
{
	var elem = document.getElementById('imgSlider');
	var y = generateRandom(1, 6);
	
	i = y;
	var imgSrc = "images/" + i + ".jpg";
	elem.setAttribute('src', imgSrc);
	changeCaption();
}

function nextImg()
{
	var elem = document.getElementById('imgSlider');

	i++;
	if (i < 0 || i > 6)
		i = 1;
	var imgSrc = "images/" + i + ".jpg";
	elem.setAttribute('src', imgSrc);
	changeCaption();
}

function previousImg()
{
	var elem = document.getElementById('imgSlider');

	i--;
	if (i <= 0 || i > 6)
		i = 6;
	var imgSrc = "images/" + i + ".jpg";
	elem.setAttribute('src', imgSrc);
	changeCaption();
}

function stopInterval()
{
	clearInterval(interval);
}

function toggleInterval()
{
	if (set == 0)
	{
		stopInterval();
		set = 1;
	}
	else
	{
		interval = setInterval(nextImg, 2000);
		set = 0;
	}
}

function togglebarman()
{
	var elem = document.getElementsByClassName('toolbar');
	elem[0].classList.toggle('toggleman');
}

var el = document.getElementById('toolbar-toggle');
el.addEventListener('click', togglebarman);
var el = document.getElementById('slider-previous');
el.addEventListener('click', previousImg);
var el = document.getElementById('slider-toggle');
el.addEventListener('click', toggleInterval);
var el = document.getElementById('slider-next');
el.addEventListener('click', nextImg);
var el = document.getElementById('slider-random');
el.addEventListener('click', randomImg);

document.onkeydown = function(event)
{
    var key = event.which || event.keyCode;

    console.log(key);
    if (key == 32)
    	toggleInterval();
    else if (key == 37)
    	nextImg();
    else if (key == 39)
    	previousImg();
}