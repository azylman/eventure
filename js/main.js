var recommendations = [
	{
		title  : 'Recommendation 1',
		start  : '2012-06-03 12:30:00',
		end  : '2012-06-03 15:30:00',
		allDay : false,
		desc : 'R1 desc',
		times : 'R1 times',
		location : 'R1 location',
		image : 'http://www.graphicsbydezign.com/images/clip-art/jesus-clip-art.gif'
	},
	{
		title  : 'Recommendation 2',
		start  : '2012-06-03 15:30:00',
		end  : '2012-06-03 16:30:00',
		allDay : false,
		desc : 'R2 desc',
		times : 'R2 times',
		location : 'R2 location',
		image : 'http://www.graphicsbydezign.com/images/clip-art/jesus-clip-art.gif'
	}
];

var sponsoredRecommendations = [
	{
		title  : 'Sponsored Recommendation 1',
		start  : '2012-06-03 10:30:00',
		end  : '2012-06-03 13:30:00',
		allDay : false,
		desc : 'S1 desc',
		times : 'S1 times',
		location : 'S1 location',
		image : 'http://www.graphicsbydezign.com/images/clip-art/jesus-clip-art.gif'
	},
	{
		title  : 'Sponsored 2',
		start  : '2012-06-03 16:30:00',
		end  : '2012-06-03 18:30:00',
		allDay : false,
		desc : 'S2 desc',
		times : 'S2 times',
		location : 'S2 location',
		image : 'http://www.graphicsbydezign.com/images/clip-art/jesus-clip-art.gif'
	}
];

$(document).ready(function() {
    $('#calendar').fullCalendar({
        // put your options and callbacks here
		defaultView: "agendaWeek",
		//events: "https://www.google.com/calendar/feeds/alex.zylman%40gmail.com/public/basic",
		eventSources: [
			{
				url: "https://www.google.com/calendar/feeds/alex.zylman%40gmail.com/public/basic",
				className: "calendar"
			},
			{
				events: recommendations,
				className: "recommendation"
			},
			{
				events: sponsoredRecommendations,
				className: "sponsored recommendation"
			}
		],
		eventAfterRender: function( event, element, view) {
			if ($(element).hasClass("recommendation")) {
				/* Simple hover tooltip */
				$(element).qtip({
					content: {
						title: event.title,
						text: event.desc + "<br/><br/>Click the event for more info!"
					},
					position: {
						my: 'left center',
						at: 'right center',
						target: $(element)
					},
					hide: {
						event: 'unfocus click mouseleave'
					}
				});
				
				$(element).removeData('qtip');
				
				$(element).qtip({
					content: {
						title: {
							text: event.title,
							button: 'X'
						},
						text: createComplexText(event)
					},
					position: {
						my: 'center',
						at: 'center',
						target: $(document)
					},
					show: {
						event: 'click',
						modal: true
					},
					hide: {
						event: 'unfocus'
					},
					style: {
						classes: 'complex'
					}
				});
			}
		}
    });
});

function createComplexText(event) {
	var text = "";
	text += "<img class='tooltip-img' src='";
	text += event.image;
	text += "' />";
	text += "<div class='tooltip-metadata'><span class='times'>";
	text += event.times;
	text += "</span> - <span class='tooltip-location'><a href='http://maps.google.com/maps?q=";
	text += event.location;
	text += "'>";
	text += event.location;
	text += "</a></span></div>";
	text += "<div class='tooltip-description'>";
	text += event.desc;
	text += "</div>";
	text += "<a href='#'>Buy tickets!</a> - <a href='#'>Add to calendar</a>";
	return text;
}
