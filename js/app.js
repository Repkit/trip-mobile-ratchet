/* declare app object */
var app = {};

/* when document ready launch app */
$(document).ready(function () {
	"use strict";

	function renderHeader(){
		var html = '<img class="icon center" src="img/logo.png" alt="awali travels">';
		$('#header').html(html);
	}

	function renderFlightSearchForm(){
		var html = 
		'<div class="card">'+
	        '<form class="input-group" method="get" action="tpl/flight/list.html">'+
	        '    <ul class="table-view">'+
	        '      <li class="table-view-cell">'+
	        '        <span class="pe-7s-way pe-2x pe-va"></span>'+
	        '        <span class="input-label">Round trip</span>'+
	        '        <div id="roundtrip-toogle" class="toggle active">'+
	        '          <div class="toggle-handle"></div>'+
	        '        </div>'+
	        '        <input type="hidden" id="roundtrip" name="roundtrip" value="1">'+
	        '      </li>'+
	        '    </ul>'+
	        '    <div class="input-row">'+
	        '      <label><span class="pe-7s-map-marker"></span></label>'+
	        '      <a class="tab-item" href="#FlightOriginModal"><input id="FlightOrigin" type="text" name="origin" class="typeahead" placeholder="Origin"/></a>'+
	        '    </div>'+
	       '     <div class="input-row">'+
	       '       <label><span class="pe-7s-map-marker"></span></label>'+
	       '       <a class="tab-item" href="#FlightDestinationModal"><input id="FlightDestination" type="text" name="destination" class="typeahead" placeholder="Destination"/></a>'+
	       '     </div>'+
	       '     <div class="input-row">'+
	       '       <label><span class="pe-7s-date"></span> <span class="input-label">Dep.</span></label>'+
	       '       <input type="date" name="dateIn"/>'+
	       '     </div>'+
	       '     <div class="input-row">'+
	       '       <label><span class="pe-7s-date"></span> <span class="input-label">Return</span></label>'+
	       '       <input type="date" name="dateOut"/>'+
	       '     </div>'+
	       '     <h5 class="content-padded"><span class="pe-7s-users pe-2x pe-va"></span> Passengers</h5>'+
	       '     <div class="input-row">'+
	       '       <label><span class="input-label">Adults</span><small class="info-text small"><i>(13-64)</i></small></label>'+
	       '       <input type="number" name="adults"/>'+
	       '     </div>'+
	       '     <div class="input-row">'+
	       '       <label><span class="input-label">Seniors</span><small class="info-text small"><i>(65+)</i></small></label>'+
	       '       <input type="number" name="seniors"/>'+
	       '     </div>'+
	       '     <div class="input-row">'+
	       '       <label><span class="input-label">Children</span><small class="info-text small"><i>(2-12)</i></small></label>'+
	       '       <input type="number" name="children"/>'+
	       '     </div>'+
	       '     <div class="input-row">'+
	       '       <label><span class="input-label">Infants</span><small class="info-text small"><i>(0-2)</i></small></label>'+
	      '        <input type="number" name="infants"/>'+
	      '      </div>'+
	      '      <h5 class="content-padded"><span class="pe-7s-config pe-2x pe-va"></span> Options</h5>'+
	      '      <ul class="table-view">'+
	      '        <li class="table-view-cell media">'+
	      '          <span class="media-object pull-left icon pe-7s-cash"></span>'+
	      '          <div class="media-body">'+
	      '            <span class="input-label">Premium Economy</span>'+
	      '          </div>'+
	      '          <div id="flightclass-toogle" class="toggle">'+
	      '            <div class="toggle-handle"></div>'+
	      '          </div>'+
	      '          <input type="hidden" id="flightclass" name="flightclass" value="">'+
	      '        </li>'+
	      '        <li class="table-view-cell media">'+
	      '          <span class="media-object pull-left icon pe-7s-graph1"></span>'+
	      '          <div class="media-body">'+
	      '            <span class="input-label">Direct flights only</span>'+
	      '          </div>'+
	      '          <div id="directflights-toogle" class="toggle">'+
	      '            <div class="toggle-handle"></div>'+
	      '          </div>'+
	      '          <input type="hidden" id="directflights" name="directflights" value="0">'+
	      '        </li>'+
	      '      </ul>'+
	      '      <div class="content-padded">'+
	      '        <button class="btn btn-positive btn-block"><span class="icon icon-search"></span>Search</button>'+
	      '      </div>'+
	      '      <div class="content-padded">&nbsp;</div>'+
	      '  </form>'+
	      '</div>';
	      
    	var flightOriginModal = 
	        '<div id="FlightOriginModal" class="modal">'+
		    '  <header class="bar bar-nav">'+
		    '    <span class="icon pe-7s-map-marker pe-2x pe-va pull-left"></span>'+
		    '    <a class="icon icon-close pull-right" href="#FlightOriginModal"></a>'+
		    '    <h1 class="title">Origin</h1>'+
		    '  </header>'+
		    '  <div class="bar bar-standard bar-header-secondary">'+
		    '    <form class="input-group">'+
		    '        <input id="tmpFlightOrigin" type="text" placeholder="Origin" class="flight-location">'+
		    '    </form>'+
		    '  </div>'+
		    '	<div class="content home">'+
		    '		<div class="topcoat-list__container scroller" style="top:138px;">'+
    		'			<ul class="topcoat-list list location-list"></ul>'+
			'		</div>'+
			'	</div>'+
		    '</div>';
	    var flightDestinationModal = 
	        '<div id="FlightDestinationModal" class="modal">'+
		    '  <header class="bar bar-nav">'+
		    '    <span class="icon pe-7s-map-marker pe-2x pe-va pull-left"></span>'+
		    '    <a class="icon icon-close pull-right" href="#FlightDestinationModal"></a>'+
		    '    <h1 class="title">Destination</h1>'+
		    '  </header>'+
		    '  <div class="content">'+
		    '    <form class="input-group">'+
		    '        <input id="tmpFlightDestination" type="text" placeholder="Destination" class="flight-location">'+
		    '    </form>'+
		    '	<div class="topcoat-list__container scroller" style="top:138px;">'+
    		'		<ul class="topcoat-list list location-list"></ul>'+
			'	</div>'+
		    '  </div>'+
		    '</div>';
	    html += flightOriginModal + flightDestinationModal;


	      $('#content').html(html);

	}

	function renderFooter(){
		var html = 
		'<a class="tab-item" href="#UAModal">'+
        '  <span class="pe-7s-user pe-2x pe-va"></span>'+
        '</a>'+
        '<a class="tab-item" href="#">'+
        '  <span class="pe-7s-like2 pe-2x pe-va"></span>'+
        '</a>'+
        '<a class="tab-item active" href="#">'+
        '  <span class="pe-7s-plane pe-2x pe-va"></span>'+
        '</a>'+
        '<a class="tab-item" href="#">'+
        '  <span class="pe-7s-home pe-2x pe-va"></span>'+
        '</a>';
        var modal = 
        '<div id="UAModal" class="modal">'+
	    '  <header class="bar bar-nav">'+
	    '    <span class="icon pe-7s-user pe-2x pe-va pull-left"></span>'+
	    '    <a class="icon icon-close pull-right" href="#UAModal"></a>'+
	    '    <h1 class="title">User Account</h1>'+
	    '  </header>'+
	    '  <div class="content">'+
	    '    <form class="input-group">'+
	    '        <select name="title">'+
	    '            <option value="mr">mr</option>  '+
	    '            <option value="mrs">mrs</option>  '+
	    '            <option value="ms">ms</option>  '+
	    '        </select>'+
	    '        <input type="text" name="firstname" placeholder="First name">'+
	    '        <input type="text" name="lastname" placeholder="Last name">'+
	    '        <input type="email" name="email" placeholder="Email">'+
	    '        <input type="date" name="birthdate" placeholder="Birthdate">'+
	    '        <div class="content-padded">'+
	    '          <button class="btn btn-positive btn-block">Save</button>'+
	    '        </div>'+
	    '    </form>'+
	    '  </div>'+
	    '</div>';

        $('#footer').html(html).after(modal);

	}

	function renderHome(){
		renderHeader();
		renderFlightSearchForm();
		renderFooter();
	}

	function route(){
		var hash = window.location.hash;
		if(!hash){
			renderHome();
		}
	}

	$(window).on('hashchange', route);

	route();

	$("body").on('toggle', "#roundtrip-toogle", function (e) {
		$('#roundtrip').val(e.originalEvent.detail.isActive);
	});
	
	$("body").on('toggle', "#flightclass-toogle", function (e) {
		$('#flightclass').val(e.originalEvent.detail.isActive);
	});
	
	$("body").on('toggle', "#directflights-toogle", function (e) {
		$('#directflights').val(e.originalEvent.detail.isActive);
	});
});