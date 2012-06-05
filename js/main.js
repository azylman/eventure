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
				events: [
					{
						title  : 'Recommendation 1',
						start  : '2012-06-03 12:30:00',
						end  : '2012-06-03 15:30:00',
						allDay : false // will make the time show
					},
					{
						title  : 'Recommendation 2',
						start  : '2012-06-03 15:30:00',
						end  : '2012-06-03 16:30:00',
						allDay : false // will make the time show
					}
				],
				className: "recommendation"
			},
			{
				events: [
					{
						title  : 'Sponsored Recommendation 1',
						start  : '2012-06-03 10:30:00',
						end  : '2012-06-03 13:30:00',
						allDay : false // will make the time show
					},
					{
						title  : 'Sponsored 2',
						start  : '2012-06-03 16:30:00',
						end  : '2012-06-03 18:30:00',
						allDay : false // will make the time show
					}
				],
				className: "sponsored recommendation"
			}
		]
    });
});