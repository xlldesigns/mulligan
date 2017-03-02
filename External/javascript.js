//Nav
function fadeoutcart(){
	var i = document.getElementById('cart');
	i.style.transition="all 0.5s ease-out";
	i.style.opacity="0";}

function fadeincart(){
	var i = document.getElementById('cart');
	i.style.opacity="1";}

function fadeoutsearch(){
	var i = document.getElementById('search');
	i.style.transition="all 0.5s ease-out";
	i.style.opacity="0";}

function fadeinsearch(){
	var i = document.getElementById('search');
	i.style.opacity="1";}

//Small Nav
function fadeoutmenu2(){
	var i = document.getElementById('menu2');
	i.style.transition="all 0.5s ease-out";
	i.style.opacity="0";}

function fadeinmenu2(){
	var i = document.getElementById('menu2');
	i.style.opacity="1";}

function fadeoutcart2(){
	var i = document.getElementById('cart2');
	i.style.transition="all 0.5s ease-out";
	i.style.opacity="0";}

function fadeincart2(){
	var i = document.getElementById('cart2');
	i.style.opacity="1";}

function fadeoutsearch2(){
	var i = document.getElementById('search2');
	i.style.transition="all 0.5s ease-out";
	i.style.opacity="0";}

function fadeinsearch2(){
	var i = document.getElementById('search2');
	i.style.opacity="1";}

//Slideshow
var slideIndex = 0;

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("indexslides");
    for(i = 0; i < slides.length; i++){
       slides[i].style.display = "none";}
    slideIndex++;
    if(slideIndex > slides.length){slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 3000);}

//Registration
function checkregistration(){
	var email = document.getElementById('email').value;
	var first = document.getElementById('firstname').value;
	var last = document.getElementById('lastname').value;
	
	var check1 = document.getElementById('regcheckbox1').checked;
	var check2 = document.getElementById('regcheckbox2').checked;
	var check3 = document.getElementById('regcheckbox3').checked;
	var check4 = document.getElementById('regcheckbox4').checked;
	var check5 = document.getElementById('regcheckbox5').checked;
	
	if(email == ""){
		alert("Please provide an email");
		inputtext.focus();
		return false;
	}else if(first == ""){
		alert("Please provide your first name");
		return false;
	}else if(last == ""){
		alert("Please provide your last name");
		return false;
	}else if(check1==false && check2==false && check3==false && check4==false && check5==false){
		alert("Please select an interest");
		return false;
	}else{return true;}
}

//Google Map
function myMap() {
  var myCenter = new google.maps.LatLng(34.5991314,-118.1450953);
  var mapCanvas = document.getElementById("googlemap");
  var mapOptions = {center: myCenter, zoom: 18, mapTypeId: google.maps.MapTypeId.SATELLITE};
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({position:myCenter});
  marker.setMap(map);
}

//Attraction Slideshow
var other2int = setInterval(other2change, 2000)
var otherslide2index = 0;
var tr2;
var otherslides2 = document.getElementsByClassName('otheratt2hide');

function other2change(){
	for (tr2 = 0; tr2 < otherslides2.length; tr2++) {
       otherslides2[tr2].style.display = "none";  
    }
	otherslide2index++;
	if (otherslide2index> otherslides2.length) {otherslide2index = 1}
	otherslides2[otherslide2index-1].style.display = "block";
}

function other2left(){
	clearInterval(other2int);
	for (tr2 = 0; tr2 < otherslides2.length; tr2++) {
       otherslides2[tr2].style.display = "none";  
    }
	otherslide2index--;
	if (otherslide2index< 1) {otherslide2index = otherslides2.length}
	otherslides2[otherslide2index-1].style.display = "block";
}

function other2right(){
	clearInterval(other2int);
	for (tr2 = 0; tr2 < otherslides2.length; tr2++) {
       otherslides2[tr2].style.display = "none";  
    }
	otherslide2index++;
	if (otherslide2index> otherslides2.length) {otherslide2index = 1}
	otherslides2[otherslide2index-1].style.display = "block";
}