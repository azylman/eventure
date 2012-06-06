$(document).ready(function() {
	$(function () {
	
		var ctr = [];
		var views = [];
		for (var i = 0; i < 14; i += 1) {
			ctr.push([i, Math.max(Math.floor(((Math.random()-.25)*10)+i), 0)]);
			views.push([i, Math.max(Math.floor(((Math.random()+.25)*10)+i), 0)]);
		}

		$.plot($("#views"), [views]);
		$.plot($("#ctr"), [ctr]);
	});
});

$("#views").parent().children('h2').qtip({
	content: 'How many people have viewed your event listing',
	position: {
		my: 'bottom center',
		at: 'top center',
	}
});

$("#ctr").parent().children('h2').qtip({
	content: 'How many people have clicked through to your ticket purchasing page',
	position: {
		my: 'bottom center',
		at: 'top center',
	}
});