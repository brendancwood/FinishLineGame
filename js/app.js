var win = false;
var defaultWidth = 25;
$('.clicker').on('mouseenter', function(){
	$(this).stop();
	var thisWidth = $(this).width();
	if (thisWidth < 700){
		$(this).animate({width:700},1000);

	}
});
$('.clicker').on('mouseout', function(){
	$(this).stop();
	var thisWidth = $(this).width();
		$(this).animate({width:25},11000);
});

setInterval(function(){
	var redWidth = $('.red').width();
	var blueWidth = $('.blue').width();
	var greenWidth = $('.green').width();
	var blackWidth = $('.black').width();
	var yellowWidth = $('.yellow').width();
	if (redWidth > 600 && blueWidth > 600 && greenWidth > 600 && blackWidth > 600 && yellowWidth > 600){
		win = true;
		$('button').removeClass('btn-warning');
		$('button').addClass('btn-success');
	}
	else{
		win = false;
		$('button').removeClass('btn-success');
		$('button').addClass('btn-warning');
	}
}, 50);
$('.done').on('click', function(){
	if(win){
		alert("You WON!");
		$('.clicker').finish();
		$('.red').width(defaultWidth);
			$('.blue').width(defaultWidth);
			$('.green').width(defaultWidth);
			$('.black').width(defaultWidth);	
	}
	else{
		alert("All the colors need to be beyond the line, try again!");
	}

});