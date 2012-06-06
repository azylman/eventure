var ron1 = "";
var ron1id = "";

var kayak = "";
var kayakid = "";

var ron2 = "";
var ron2id = "";

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
		price: 'free',
		anim: -1
	},
	{
		title  : 'Shedd Aquarium',
		start  : '2012-06-09 13:00:00',
		end  : '2012-06-09 15:00:00',
		allDay : false,
		desc : "Come see fishies and sea creatures of all kinds - including 25 different species of sharks - at Shedd, Chicago's famous aquarium. You get access to the Ocenarium Show and Exhibits, the general aquarium, the Wild Reef, and the Polar Play Zone. Buses will be provided to and from campus for this event.",
		times : 'Buses leave at 1:00 PM',
		location : 'John G. Shedd Aquarium, 1200 South Lake Shore Drive, Chicago, IL',
		image : 'http://static.ddmcdn.com/gif/family-vacations-shedd-aquarium.jpg',
		ticket : 'http://nbo.universitytickets.com/user_pages/category.asp?id=34',
		price: '$12',
		anim: -1
	},
	{
		title  : 'Lincoln Park Zoo',
		start  : '2012-06-09 13:00:00',
		allDay : false,
		end  : '2012-06-09 15:00:00',
		desc : "Who doesn't love the zoo - seriously. After four years of stressing out over classes, senior theses, and whether or not we'll be employed next year, it's time to act like a kid again and make faces at the monkeys. Buses will be provided to and from campus for this event, but feel free to stay in the area and enjoy the great restaurants in the Lincoln Park West neighborhood.",
		times : 'Buses leave at 1:00 PM',
		location : 'Lincoln Park Zoo, 2200 North Cannon Drive, Chicago, IL',
		image : 'http://www.chicagonow.com/lists-that-actually-matter/files/2011/07/PICT0392_medium.jpg',
		ticket : '#',
		price: 'free',
		anim: -1
	},
	{
		title  : 'Kingston Mines Blues Club',
		start  : '2012-06-09 22:00:00',
		end  : '2012-06-09 24:00:00',
		allDay : false,
		desc : "Two stages in adjoining rooms present nonstop blues all night long at Kingston Mines, the great granddaddy of the Chicago music scene. The only blues bar with a 4am license, their motto is 'hear the blues, drink the booze, and talk loud.' Get in with special $10 discounted cover if you show your WildCard!",
		times : '10:00 PM',
		location : '2548 N. Halsted Street, Chicago, IL',
		image : 'http://www.chibarproject.com/Reviews/KingstonMines/KingstonMinesCoupleYC.jpg',
		ticket : '#',
		price: '$10',
		anim: -1
	},
	{
		title  : 'Ask Big Questions Bonfire and BBQ',
		start  : '2012-06-10 19:00:00',
		end  : '2012-06-10 21:00:00',
		allDay : false,
		desc : "Senior Week is excited to partner with Ask Big Questions (ABQ) for a night of s'mores, BBQ, and deep conversations. Reminisce about the past four years and freak-out about the future. ABQ aims to discuss life's big questions in a secular, casual environment. BYOMRS (Bring your own marshmallow-roasting stick).",
		times : '7:00 PM',
		location : 'The Lakefill fire pit',
		image : 'http://images.businessweek.com/ss/09/08/0811_northwestern_school_tour/image/lakefill.jpg',
		ticket : '#',
		price: 'free',
		anim: -1
	},
	{
		title  : 'Volunteer At City Farm',
		start  : '2012-06-11 13:00:00',
		end  : '2012-06-11 15:00:00',
		allDay : false,
		desc : "The Resource Center of Chicago has been turning vacant lots into vibrant, healthy community farms for over three decades. The farm's produce goes directly for sale to the public as a healthy, organic, affordable way to support local communities. You can even pick up some pointers about starting your own personal garden! Buses will be provided to and from campus for this event. Spots are limited for this event.",
		times : '1:00 PM',
		location : '1204 N Clybourn Ave, Chicago, IL 60610',
		image : 'http://www.resourcecenterchicago.org/images/viewfromroof2.jpg',
		ticket : 'http://nbo.universitytickets.com/user_pages/category.asp?id=34',
		price: '$5',
		anim: -1
	},
	{
		title  : 'Private Show at ComedySportz',
		start  : '2012-06-11 17:30:00',
		end  : '2012-06-11 19:00:00',
		allDay : false,
		desc : "Still don't know what the big deal is about the Chicago comedy scene? The longest-running short-form improv show in Chicago is putting on a private show just for Northwestern seniors! Come see this 90 minute show conveniently located just steps off the Belmont Red Line stop. Come 15-30 minutes prior to showtime to assure seating. Transportation is not included in your ticket.",
		times : '5:30 PM',
		location : '929 W. Belmont Avenue, Chicago, IL',
		image : 'http://img4.findthebest.com/sites/default/files/358/media/images/Comedy_Sportz_Theatre.jpg',
		ticket : 'http://nbo.universitytickets.com/user_pages/category.asp?id=34',
		price: '$15',
		anim: -1
	},
	{
		title  : 'Volunteer at Ronald McDonald House',
		start  : '2012-06-12 10:00:00',
		end  : '2012-06-12 14:00:00',
		allDay : false,
		desc : "This year, we are proud to offer community service opportunities for the first time as part of Senior Week! We will be taking small groups of NU seniors to the Chicago Ronald McDonald House for Children's Memorial Hospital to cook lunch for the children and their families.",
		times : '10:00 AM',
		location : 'Ronald McDonald House, 622 West Deming Place, Chicago, IL',
		image : 'http://americajanespeaks.net/wp-content/uploads/2011/06/Ronald-McDonald-House.jpg',
		ticket : '#',
		price: 'free',
		anim: 1
	},
	/*{
		title  : 'Chicago Pizza Tour',
		start  : '2012-06-12 11:00:00',
		end  : '2012-06-12 14:00:00',
		allDay : false,
		desc : "How many of us have only consumed Chicago-style pizza way too late after a Monday night out on the town? Enjoy this double decker bus ride through the city and sample slices at some of Chicago's finest and most historic pizzerias. Meet at our first location, Pizano's Pizza (61 E. Madison Street), in the Loop.",
		times : '11:00 AM',
		location : "Pizano's Pizza & Pasta, 61 East Madison Street, Chicago, IL",
		image : 'http://www.chisoxcollector.com/images/kim/John.jpg',
		ticket : 'http://nbo.universitytickets.com/user_pages/category.asp?id=34',
		price: '$28.50',
		anim: -1
	},
	{
		title  : 'Museum of Contemporary Art',
		start  : '2012-06-12 13:00:00',
		end  : '2012-06-12 15:00:00',
		allDay : false,
		desc : "Pshaw... the Art Institute? Who do you think I am? A freshman? This Senior Week, get your culture on at the Museum of Contemporary Art! The MCA offers exhibitions of the most thought-provoking art created since 1945. Easily accessed via the Intercampus or the CTA.",
		times : '1:00 PM',
		location : "220 E. Chicago Avenue, Chicago, IL",
		image : 'http://byteful.com/media/d/6429-4/Steps+up+to+Chicago+Museum+of+Contemp+Art.jpg',
		ticket : '#',
		price: 'free',
		anim: -1
	},*/
	{
		title  : 'Volunteer at Ronald McDonald House',
		start  : '2012-06-13 10:00:00',
		end  : '2012-06-13 14:00:00',
		allDay : false,
		desc : "This year, we are proud to offer community service opportunities for the first time as part of Senior Week! We will be taking small groups of NU seniors to the Chicago Ronald McDonald House for Children's Memorial Hospital to cook lunch for the children and their families.",
		times : '10:00 AM',
		location : 'Ronald McDonald House, 622 West Deming Place, Chicago, IL',
		image : 'http://americajanespeaks.net/wp-content/uploads/2011/06/Ronald-McDonald-House.jpg',
		ticket : '#',
		price: 'free',
		anim: 3
	},
	{
		title  : 'Chicago Archicture Boat Tour',
		start  : '2012-06-13 12:00:00',
		end  : '2012-06-13 13:30:00',
		allDay : false,
		desc : "This is the quintessential Chicago experience. This 90-minute guided river cruise provides an overview of the historic and modern architectural styles of Chicago. The June weather will be perfect and the boat's onboard beer bar certainly doest hurt! Transportation to this event is up to you, but we recommend taking the El downtown and grabbing lunch before we board! Spots are limited.",
		times : '12:00 PM',
		location : "400 N. Michigan Avenue, Chicago, IL",
		image : 'http://www.wendellaboats.com/images/homeRotation/3.jpg',
		ticket : 'http://nbo.universitytickets.com/user_pages/category.asp?id=34',
		price: '$15.60',
		anim: -1
	},
	{
		title  : 'Kayak the Chicago River',
		start  : '2012-06-12 10:00:00',
		end  : '2012-06-12 14:00:00',
		allDay : false,
		desc : "For the outdoorsmen among us - jump in your kayak and paddle down the Chicago River! You'll see the architecture and sites of the city from a whole new perspective. Get ready to have some fun splashing around in the sun on this guided tour. Buses will be provided to and from campus for this event.",
		times : '10:00 AM',
		location : 'Norris University Center, 1999 Campus Drive, Evanston, IL',
		image : 'http://archive.mensjournal.com/wp-content/uploads/m193urba.jpg',
		ticket : 'http://nbo.universitytickets.com/user_pages/category.asp?id=34',
		price: '$55',
		anim: 2
	}
];

var sponsoredRecommendations = [
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
		price: '$13',
		anim: -1
	},
	{
		title  : 'Goose Island Private Tour and Tasting',
		start  : '2012-06-10 11:30:00',
		end  : '2012-06-10 13:00:00',
		allDay : false,
		desc : "Perhaps the most popular event from previous Senior Weeks, we are excited to once again offer private tours of Chicago's own Goose Island Brewery. Get your ticket ASAP for a 90 minute tour through the famous Chicago brewery and sample some of the finest ales in all the land. Our event is being held as Goose Island's Clybourn location, which is just off the Red Line, so there will be no buses for this event. This event is 21+.",
		times : '11:30AM, 2PM, and 4PM',
		location : 'Goose Island Brewing Co., 1800 North Clybourn Avenue, Chicago, IL',
		image : 'http://www.gooseisland.com/goosefilebin/images/clybourn3.jpg',
		ticket : 'http://nbo.universitytickets.com/user_pages/category.asp?id=34',
		price: '$13',
		anim: -1
	},
	{
		title  : 'Goose Island Private Tour and Tasting',
		start  : '2012-06-10 14:00:00',
		end  : '2012-06-10 15:30:00',
		allDay : false,
		desc : "Perhaps the most popular event from previous Senior Weeks, we are excited to once again offer private tours of Chicago's own Goose Island Brewery. Get your ticket ASAP for a 90 minute tour through the famous Chicago brewery and sample some of the finest ales in all the land. Our event is being held as Goose Island's Clybourn location, which is just off the Red Line, so there will be no buses for this event. This event is 21+.",
		times : '11:30AM, 2PM, and 4PM',
		location : 'Goose Island Brewing Co., 1800 North Clybourn Avenue, Chicago, IL',
		image : 'http://www.gooseisland.com/goosefilebin/images/clybourn3.jpg',
		ticket : 'http://nbo.universitytickets.com/user_pages/category.asp?id=34',
		price: '$13',
		anim: -1
	},
	{
		title  : 'Goose Island Private Tour and Tasting',
		start  : '2012-06-10 16:00:00',
		end  : '2012-06-10 17:30:00',
		allDay : false,
		desc : "Perhaps the most popular event from previous Senior Weeks, we are excited to once again offer private tours of Chicago's own Goose Island Brewery. Get your ticket ASAP for a 90 minute tour through the famous Chicago brewery and sample some of the finest ales in all the land. Our event is being held as Goose Island's Clybourn location, which is just off the Red Line, so there will be no buses for this event. This event is 21+.",
		times : '11:30AM, 2PM, and 4PM',
		location : 'Goose Island Brewing Co., 1800 North Clybourn Avenue, Chicago, IL',
		image : 'http://www.gooseisland.com/goosefilebin/images/clybourn3.jpg',
		ticket : 'http://nbo.universitytickets.com/user_pages/category.asp?id=34',
		price: '$13',
		anim: -1
	},
	{
		title  : 'Goose Island Private Tour and Tasting',
		start  : '2012-06-11 11:30:00',
		end  : '2012-06-11 13:00:00',
		allDay : false,
		desc : "Perhaps the most popular event from previous Senior Weeks, we are excited to once again offer private tours of Chicago's own Goose Island Brewery. Get your ticket ASAP for a 90 minute tour through the famous Chicago brewery and sample some of the finest ales in all the land. Our event is being held as Goose Island's Clybourn location, which is just off the Red Line, so there will be no buses for this event. This event is 21+.",
		times : '11:30AM, 2PM, and 4PM',
		location : 'Goose Island Brewing Co., 1800 North Clybourn Avenue, Chicago, IL',
		image : 'http://www.gooseisland.com/goosefilebin/images/clybourn3.jpg',
		ticket : 'http://nbo.universitytickets.com/user_pages/category.asp?id=34',
		price: '$13',
		anim: -1
	},
	{
		title  : 'Goose Island Private Tour and Tasting',
		start  : '2012-06-11 14:00:00',
		end  : '2012-06-11 15:30:00',
		allDay : false,
		desc : "Perhaps the most popular event from previous Senior Weeks, we are excited to once again offer private tours of Chicago's own Goose Island Brewery. Get your ticket ASAP for a 90 minute tour through the famous Chicago brewery and sample some of the finest ales in all the land. Our event is being held as Goose Island's Clybourn location, which is just off the Red Line, so there will be no buses for this event. This event is 21+.",
		times : '11:30AM, 2PM, and 4PM',
		location : 'Goose Island Brewing Co., 1800 North Clybourn Avenue, Chicago, IL',
		image : 'http://www.gooseisland.com/goosefilebin/images/clybourn3.jpg',
		ticket : 'http://nbo.universitytickets.com/user_pages/category.asp?id=34',
		price: '$13',
		anim: -1
	},
	{
		title  : 'Goose Island Private Tour and Tasting',
		start  : '2012-06-11 16:00:00',
		end  : '2012-06-11 17:30:00',
		allDay : false,
		desc : "Perhaps the most popular event from previous Senior Weeks, we are excited to once again offer private tours of Chicago's own Goose Island Brewery. Get your ticket ASAP for a 90 minute tour through the famous Chicago brewery and sample some of the finest ales in all the land. Our event is being held as Goose Island's Clybourn location, which is just off the Red Line, so there will be no buses for this event. This event is 21+.",
		times : '11:30AM, 2PM, and 4PM',
		location : 'Goose Island Brewing Co., 1800 North Clybourn Avenue, Chicago, IL',
		image : 'http://www.gooseisland.com/goosefilebin/images/clybourn3.jpg',
		ticket : 'http://nbo.universitytickets.com/user_pages/category.asp?id=34',
		price: '$13',
		anim: -1
	},
	/*{
		title  : 'Last Lecture',
		start  : '2012-06-11 20:00:00',
		end  : '2012-06-11 21:00:00',
		allDay : false,
		desc : "In true Nerdwestern fashion, the highlight of Senior Week will be a lecture from a faculty member! Over a thousand seniors go to the historic Wrigleyville bar, The Cubby Bear, and enjoy a fun, funny and inspirational lecture given by the class-elected speaker. Transportation is not included in your ticket. This event is 21+.",
		times : '8:00 PM',
		location : '1059 W. Addison Street, Chicago, IL',
		image : 'http://www.chibarproject.com/Reviews/CubbyBear/CubbyBearHotAM.jpg',
		ticket : 'http://nbo.universitytickets.com/user_pages/category.asp?id=34',
		price: '$10',
		anim: -1
	},
	{
		title  : 'Senior Formal',
		start  : '2012-06-12 19:00:00',
		end  : '2012-06-12 23:00:00',
		allDay : false,
		desc : "Swanky boat. Lots of dancing. The beautiful Chicago skyline on a warm summer night. It's Senior Formal 2012. Dress to impress (but please, this is not prom :)) and get ready to celebrate! Ticket includes bus to and from Navy Pier (buses load at 7pm at various locations around campus) and hor d'oeuvres on the boat. A cash bar is available, which is why this event is 21+ only. Cruise goes from 8:30 to 11pm, and you're free to continue the party downtown or take the buses back to Evanston.",
		times : '7:00 PM',
		location : 'Navy Pier, 700 East Grand Avenue, Chicago, IL',
		image : 'http://chicagoweddingvenues.com/main/images/anita_dee/anita_dee_01.jpg',
		ticket : 'http://nbo.universitytickets.com/user_pages/category.asp?id=34',
		price: '$29',
		anim: -1
	},*/
	{
		title  : 'Senior Night at Wrigley',
		start  : '2012-06-13 19:00:00',
		end  : '2012-06-13 23:00:00',
		allDay : false,
		desc : "Go, Cubs! Root for the home team as they take on the Detroit Tigers. One of the most popular events in years past, don't wait to buy your ticket. Transportation is via CTA. Enjoy a warm summer night with beer, brats, baseball and good friends.",
		times : '7:00 PM',
		location : 'Wrigley Field, 1060 West Addison Street, Chicago, IL',
		image : 'http://bloguin.com/theoutsidecorner/images/stories/wrigley.jpg',
		ticket : 'http://nbo.universitytickets.com/user_pages/category.asp?id=34',
		price: '$19',
		anim: -1
	/*},
	{
		title  : "President's Reception",
		start  : '2012-06-14 12:00:00',
		end  : '2012-06-14 13:00:00',
		allDay : false,
		desc : "Graduates, their families, and guests are invited to attend this informal reception. President Morty Schapiro will be present to meet those attending.",
		times : '12:00 PM',
		location : 'Norris East Lawn',
		image : 'https://encrypted-tbn2.google.com/images?q=tbn:ANd9GcQnKvf9iBqQo1a4H3MUtjv-7jIRurpwonxifDmsW95fYzmYxmxSXQ',
		ticket : '#',
		price: 'no ticket required',
		anim: -1
	},
	{
		title  : "154th Annual Commencement",
		start  : '2012-06-15 10:30:00',
		end  : '2012-06-15 13:00:00',
		allDay : false,
		desc : "The ceremony begins with the procession of graduates, the faculty, and the President's party. The two-hour program includes the awarding of honorary degrees, a speaker, the President's message to graduates, and the conferring of degrees by school. Gates open at 8:30AM.",
		times : '10:30 AM',
		location : 'Ryan Field',
		image : 'http://i.ytimg.com/vi/kTHRX1eWf8Y/0.jpg',
		ticket : '#',
		price: 'admission by ticket only',
		anim: -1*/
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
			
			switch(event.anim) {
				case 1:
					console.log("found ron1");
					ron1 = element;
					ron1id = $(element).qtip('option', 'id');
					$("#ui-tooltip-" + ron1id + " .tooltip-add").live(
						'click',
						function() {
							addEventToCalendar(ron1);
							closeQtip(ron1id);
					});
					break;
				case 2:
					console.log("found kayak");
					kayak = element;
					kayakid = $(element).qtip('option', 'id');
					$("#ui-tooltip-" + kayakid + " .tooltip-add").live(
						'click',
						function() {
							if (confirm("The kayaking event conflicts with your volunteer trip. Would you like to volunteer on Wednesday instead?")) {
								addEventToCalendar(ron2);
								addEventToCalendar(kayak);
								removeEventFromCalendar(ron1);
								closeQtip(kayakid);
							}
					});
					break;
				case 3:
					console.log("found ron2");
					ron2 = element;
					ron2id = $(element).qtip('option', 'id');
					break;
			}
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
	text += "'>Buy tickets!</a> - <a href='#' class='tooltip-add'>Add to calendar</a></div>";
	return text;
}

function addEventToCalendar(element) {
	$(element).css('opacity', '1');
	colorEvent(element, '#36C');
}

function removeEventFromCalendar(element) {
	colorEvent(element, '#33CC7A');
	var opacity = "";
	if ($(element).hasClass('sponsored')) {
		opacity = '.8';
	} else {
		opacity = '.5';
	}
	$(element).css('opacity', opacity);
	$(element).hover(
		function() {$(element).css('opacity', '1')},
		function() {$(element).css('opacity', opacity)
	});
}

function colorEvent(element, color) {
	$(element).css('border-color', color);
	$(element).css('background-color', color);
	var descendants = $(element).find(".fc-event-skin");
	descendants.css('border-color', color);
	descendants.css('background-color', color);
}

function closeQtip(id) {
	$("#ui-tooltip-" + id).hide();
	$("#qtip-overlay").hide();
}