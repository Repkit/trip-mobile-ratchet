$(document).ready(function () {
    "use strict";
    
    $('#FlightOriginModal').on('modalClose', function(e) {
        $('#FlightOrigin').val($('#tmpFlightOrigin').val());
    });	
    
    $('#FlightDestinationModal').on('modalClose', function(e) {
        $('#FlightDestination').val($('#tmpFlightDestination').val());
    });
    
    $('.flight-location').on('keyup', findByName);

});


function findByName() {
    flightLocations.findByName($('.flight-location').val()).done(function (locations) {
        console.log(locations);
        var l = locations.length,
            location;
        $('.location-list').empty();
        for (var i = 0; i < l; i++) {
            location = locations[i];
            $('.location-list').append(
                '<li class="topcoat-list__item"><a href="javascript:void();" data-id="' + location.Id + '">' +
                '<span class="icon pe-7s-paper-plane pe-va pull-left"></span>' +
                '<p>' + location.Name + '</p></a></li>');
        }
    });
};