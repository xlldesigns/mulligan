$(document).ready(function(){

//Nav
$('#nav1').on('mouseover', function(){
	$('#drop1').slideDown(200);
	
});

$('#nav1').on('mouseleave', function(){
	$('#drop1').slideUp(200);
	
});

$('#nav2').on('mouseover', function(){
	$('#drop2').slideDown(200);
});

$('#nav2').on('mouseleave', function(){
	$('#drop2').slideUp(200);
});

$('#nav3').on('mouseover', function(){
	$('#drop3').slideDown(200);
});

$('#nav3').on('mouseleave', function(){
	$('#drop3').slideUp(200);
});

$('#nav4').on('mouseover', function(){
	$('#drop4').slideDown(200);
});

$('#nav4').on('mouseleave', function(){
	$('#drop4').slideUp(200);
});

//Small Nav
$(window).resize(function () {
    var viewportWidth = $(window).width();
    if (viewportWidth > 660) {
            $("#smnavmenu").slideUp(0);
    }
});

$('#opensm').on('click', function(){
	$('#smnavmenu').slideToggle(200);
});

$('#smmenutab1').on('click', function(){
	$('#whitemenutab1').slideToggle(200);
});

$('#smmenutab2').on('click', function(){
	$('#whitemenutab2').slideToggle(200);
});

$('#smmenutab3').on('click', function(){
	$('#whitemenutab3').slideToggle(200);
});

$('#smmenutab4').on('click', function(){
	$('#whitemenutab4').slideToggle(200);
});

//Index Modal
$('#indexmodal').slideDown(500);

$('#mainmodx').on('click', function(){
	$('#indexmodal').slideUp(500);
});

//FAQS
$('#faqstopwrap1').on('click', function(){
	$("#faqsvert1").slideToggle(200);
	$('#faqsa1').slideToggle(200);
});

$('#faqstopwrap2').on('click', function(){
	$("#faqsvert2").slideToggle(200);
	$('#faqsa2').slideToggle(200);
});

$('#faqstopwrap3').on('click', function(){
	$("#faqsvert3").slideToggle(200);
	$('#faqsa3').slideToggle(200);
});

$('#faqstopwrap4').on('click', function(){
	$("#faqsvert4").slideToggle(200);
	$('#faqsa4').slideToggle(200);
});

$('#faqstopwrap5').on('click', function(){
	$("#faqsvert5").slideToggle(200);
	$('#faqsa5').slideToggle(200);
});

$('#faqstopwrap6').on('click', function(){
	$("#faqsvert6").slideToggle(200);
	$('#faqsa6').slideToggle(200);
});

$('#faqstopwrap7').on('click', function(){
	$("#faqsvert7").slideToggle(200);
	$('#faqsa7').slideToggle(200);
});

$('#faqstopwrap8').on('click', function(){
	$("#faqsvert8").slideToggle(200);
	$('#faqsa8').slideToggle(200);
});

$('#faqstopwrap9').on('click', function(){
	$("#faqsvert9").slideToggle(200);
	$('#faqsa9').slideToggle(200);
});

$('#faqstopwrap10').on('click', function(){
	$("#faqsvert10").slideToggle(200);
	$('#faqsa10').slideToggle(200);
});

$('#faqstopwrap11').on('click', function(){
	$("#faqsvert11").slideToggle(200);
	$('#faqsa11').slideToggle(200);
});

$('#faqstopwrap12').on('click', function(){
	$("#faqsvert12").slideToggle(200);
	$('#faqsa12').slideToggle(200);
});

$('#faqstopwrap13').on('click', function(){
	$("#faqsvert13").slideToggle(200);
	$('#faqsa13').slideToggle(200);
});

});