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
						allDay : false, // will make the time show
						desc : 'R1 desc'
					},
					{
						title  : 'Recommendation 2',
						start  : '2012-06-03 15:30:00',
						end  : '2012-06-03 16:30:00',
						allDay : false, // will make the time show
						desc : 'R2 desc'
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
						allDay : false, // will make the time show
						desc : 'S1 desc'
					},
					{
						title  : 'Sponsored 2',
						start  : '2012-06-03 16:30:00',
						end  : '2012-06-03 18:30:00',
						allDay : false, // will make the time show
						desc : 'S2 desc'
					}
				],
				className: "sponsored recommendation"
			}
		],
		eventAfterRender: function( event, element, view) {
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
					text: event.desc
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
    });
});