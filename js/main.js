var recommendations = [
	{
		title  : 'Class Photo & March Thru the Arch',
		start  : '2012-06-08 17:30:00',
		end  : '2012-06-08 18:00:00',
		allDay : false,
		desc : "At the end of finals week, the Class of 2012 will gather at the Rock for our class picture and remarks from Dean Burgie Howard. Though our class never got to March Thru the Arch as freshmen, we're excited to carry on this new tradition as we mark the completion of our academic requirements. Get your Instagram ready - this is the first of many Tweetable moments in Senior Week!",
		times : '5:30PM',
		location : 'The Rock outside University Hall',
		image : 'http://upload.wikimedia.org/wikipedia/commons/a/a8/Northwestern_Arch.jpg',
		ticket : '#',
		price: 'free'
	}
];

var sponsoredRecommendations = [
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
	},
	{
		title  : 'Senior Class Gift Reception',
		start  : '2012-06-08 18:00:00',
		end  : '2012-06-08 20:00:00',
		allDay : false,
		desc : "At major universities across the country, the Senior Class Gift is a collective financial contribution from the members of the senior class to their alma mater in honor of graduation. Join over 1,000 of your classmates by making a gift of $20.12 today to the area of Northwestern that matches your interests! Senior Class Gift donors will be invited to the Recognition Event on Friday, June 8th to kick-off Senior Week, and be listed on the online honor roll, in the Daily's graduation issue, and on the Senior Class Gift plaque in Norris. To donate online, go to http://bit.ly/Jd2Z3e.",
		times : '6:00 PM',
		location : 'The Lakefill - invitation only',
		image : 'http://images.businessweek.com/ss/09/08/0811_northwestern_school_tour/image/lakefill.jpg',
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
