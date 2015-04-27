/* when document ready launch app */
$(document).ready(function () {
	"use strict";
	fetchFlights();
});

function fetchFlights(){

	//define local vars
	var fligths = flightAdapter.fetchAll(),
		cnt = fligths.length,
		list = $('#flight-list'),
		flight, route_departure, route_return, depFirstSeg,
		route_departure_html, route_return_html;

	//empty list
	list.empty();

	//populate list
	for(var i = 0; i < cnt; i++){
		flight = fligths[i];

		//departure route vars
		route_departure = flight.DepartureRoute;
		dep_first_seg = route_departure.Segment[0];
		dep_last_seg = route_departure.Segment[route_departure.Segment.length-1];

		//return route vars
		if(flight.hasOwnProperty('ReturnRoute')){
			route_return = flight.ReturnRoute;
			ret_first_seg = route_return.Segment[0];
			ret_last_seg = route_return.Segment[route_return.Segment.length-1];
		}else{
			route_return = null;
			route_return_html = '';
			ret_first_seg = null;
			ret_last_seg = null;
		}

		route_departure_html = ''+
			'    <!-- departure route -->'+
	        '    <img class="media-object pull-left" src="http://placehold.it/48x48" alt="' + dep_first_seg.Carrier.Marketing._ + '">'+
	        '    <div class="media-body flight-route-item">'+
	        '      <span class="flight-title">' + dep_first_seg.Origin.Airport.Code + ' (' + dep_first_seg.Origin.Airport.City + ') > ' + dep_last_seg.Destination.Airport.Code + ' (' + dep_last_seg.Destination.Airport.City + ')</span>'+
	        '      <p class="flight-info">' + moment(dep_first_seg.Origin.Time,'HH:mm:ss').format('HH:mm') + ' > ' + moment(dep_last_seg.Destination.Time,'HH:mm:ss').format('HH:mm') + ' (' + moment(dep_last_seg.Origin.Date).format('DD MMM') + ')</p>'+
	        '      <p class="flight-info"><strong>' + parseInt(route_departure.Segment.length-1) + ' stops</strong> (' + route_departure.Duration + ') ' + dep_first_seg.Carrier.Operating.Code + dep_first_seg.Flight.Number + '</p>'+
	        '    </div>';

	    if(route_return){
	    	route_return_html = ''+
	    	'    <!-- return route -->'+
	        '    <img class="media-object pull-left" src="http://placehold.it/48x48" alt="' + ret_first_seg.Carrier.Marketing._ + '">'+
	        '    <div class="media-body flight-route-item">'+
	        '      <span class="flight-title">' + ret_first_seg.Origin.Airport.Code + ' (' + ret_first_seg.Origin.Airport.City + ') > ' + ret_last_seg.Destination.Airport.Code + ' (' + ret_last_seg.Destination.Airport.City + ')</span>'+
	        '      <p class="flight-info">' + moment(ret_first_seg.Origin.Time,'HH:mm:ss').format('HH:mm') + ' > ' + moment(ret_last_seg.Destination.Time,'HH:mm:ss').format('HH:mm') + ' (' + moment(ret_last_seg.Origin.Date).format('DD MMM') + ')</p>'+
	        '      <p class="flight-info"><strong>' + parseInt(route_return.Segment.length-1) + ' stops</strong> (' + route_return.Duration + ') ' + ret_first_seg.Carrier.Operating.Code + ret_first_seg.Flight.Number + '</p>'+
	        '    </div>';
	    }

		list.append(
			'<li class="table-view-cell media flight-item">'+
	        '<form action="#" method="get">'+
	        '  <a class="navigate-right" href="tpl/flight/flight-detail.html" data-transition="slide-in">'+
	        	route_departure_html +
	        	route_return_html +
	        '  </a>'+
	        '</form>'+
	        '</li>'+
	        '<li class="table-view-cell table-view-divider">'+
	        '  <a class="btn btn-outlined btn-positive" href="tpl/flight/flight-detail.html" data-transition="slide-in">Buy Tickets</a>' + flight.Price + flight.Currency +
	        '</li>'
		);
	}

	//append last list element
	list.append(
		'<!-- list end element -->'+
        '<li class="table-view-cell media flight-list-end"></li>'
	);

}