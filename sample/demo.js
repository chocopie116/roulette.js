$(function(){
	$('.roulette').find('img').hover(function(){
		console.log($(this).height());
	});
	var p = {
        speed: 1000,
        duration: 30,
		startCallback : function() {
			$('.start').attr('disabled', 'true');
			$('.stop').removeAttr('disabled');
		},
		slowDownCallback : function() {
			$('.stop').attr('disabled', 'true');
		},
		stopCallback : function($stopElm) {
			$('.start').removeAttr('disabled');
			$('.stop').attr('disabled', 'true');
		}

	}
	var rouletter = $('div.roulette');
	rouletter.roulette(p);	
	$('.stop').click(function(){
		rouletter.roulette('stop');	
	});
	$('.stop').attr('disabled', 'true');
	$('.start').click(function(){
		updateParamater();
		rouletter.roulette('start');	
	});

	var updateParamater = function(){
		p.stopImageNumber = RouletteGift.draw();
		rouletter.roulette('option', p);	
	}
});

