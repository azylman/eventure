$(document).ready(function() {
	$(function () {
	
		var clicks = [];
		var views = [];
		for (var i = 0; i < 14; i += 1) {
			clicks.push([i, Math.max(Math.floor(((Math.random()-.25)*10)+i), 0)]);
			views.push([i, Math.max(Math.floor(((Math.random()+.25)*10)+i), 0)]);
		}

		$.plot($("#views"), [views]);
		$.plot($("#clicks"), [clicks]);
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