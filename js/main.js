var recommendations = [
	{
		title  : 'Recommendation 1',
		start  : '2012-06-03 12:30:00',
		end  : '2012-06-03 15:30:00',
		allDay : false,
		desc : 'R1 desc',
		times : 'R1 times',
		location : 'R1 location',
		image : 'http://www.graphicsbydezign.com/images/clip-art/jesus-clip-art.gif',
		ticket : '#',
		price: 'R1 price'
	},
	{
		title  : 'Recommendation 2',
		start  : '2012-06-03 15:30:00',
		end  : '2012-06-03 16:30:00',
		allDay : false,
		desc : 'R2 desc',
		times : 'R2 times',
		location : 'R2 location',
		image : 'http://www.graphicsbydezign.com/images/clip-art/jesus-clip-art.gif',
		ticket : '#',
		price: 'R2 price'
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
		image : 'http://www.graphicsbydezign.com/images/clip-art/jesus-clip-art.gif',
		ticket : '#',
		price: 'S1 price'
	},
	{
		title  : 'Sponsored 2',
		start  : '2012-06-03 16:30:00',
		end  : '2012-06-03 18:30:00',
		allDay : false,
		desc : 'S2 desc',
		times : 'S2 times',
		location : 'S2 location',
		image : 'http://www.graphicsbydezign.com/images/clip-art/jesus-clip-art.gif',
		ticket : '#',
		price: 'S2 price'
	},
	{
		title  : 'Goose Island Private Tour and Tasting',
		start  : '2012-06-10 11:30:00',
		end  : '2012-06-10 14:00:00',
		allDay : false,
		desc : "Perhaps the most popular event from previous Senior Weeks, we are excited to once again offer private tours of Chicago's own Goose Island Brewery. Get your ticket ASAP for a 90 minute tour through the famous Chicago brewery and sample some of the finest ales in all the land. Our event is being held as Goose Island's Clybourn location, which is just off the Red Line, so there will be no buses for this event. This event is 21+.",
		times : '11:30AM, 2PM, and 4PM',
		location : 'Goose Island Brewing Co., 1800 North Clybourn Avenue, Chicago, IL',
		image : 'http://www.gooseisland.com/goosefilebin/images/clybourn3.jpg',
		ticket : 'http://nbo.universitytickets.com/user_pages/category.asp?id=34',
		price: '$13'
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
	text += "<div class='tooltip-metadata'><div class='tooltip-times'>";
	text += event.times;
	text += "</div><div class='tooltip-location'><a href='http://maps.google.com/maps?q=";
	text += event.location;
	text += "'>";
	text += event.location;
	text += "</a></div><div class='tooltip-price'>";
	text += event.price;
	text += "</div></div>";
	text += "<div class='tooltip-description'>";
	text += event.desc;
	text += "</div>";
	text += "<div class='tooltip-links'><a href='";
	text += event.ticket;
	text += "'>Buy tickets!</a> - <a href='#'>Add to calendar</a></div>";
	return text;
}
