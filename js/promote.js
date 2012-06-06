$(document).ready(function() {
	$("#promote-btn").click(function() {
		$("#promotion-panel").hide();
		$("#analytics").fadeIn('fast', function () {
			var clicks = [];
			var views = [];
			var ctr = [];
			for (var i = 0; i < 28; i += 1) {
				var clickNum = Math.pow(Math.max(Math.floor(((Math.random())*10)+i), 0), 2.6);
				var viewNum = Math.pow(Math.max(Math.floor(((Math.random())*40)+i), 0), 2.5);
				var ctrNum = Math.min(clickNum/viewNum, .9);
				clicks.push([i, clickNum]);
				views.push([i, viewNum]);
				ctr.push([i, ctrNum]);
			}

			$.plot($("#views"), [views]);
			$.plot($("#clicks"), [clicks]);
			$.plot($("#ctr"), [ctr]);
		});
	});
});

$("#views").parent().children('h2').qtip({
	content: 'How many people have viewed your event listing',
	position: {
		my: 'bottom center',
		at: 'top center',
	}
});

$("#clicks").parent().children('h2').qtip({
	content: 'How many people have clicked through to your ticket purchasing page',
	position: {
		my: 'bottom center',
		at: 'top center',
	}
});

$("#ctr").parent().children('h2').qtip({
	content: 'Click-through rate: of the people that view your event, how many click',
	position: {
		my: 'bottom center',
		at: 'top center',
	}
});