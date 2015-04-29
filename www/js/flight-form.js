$(document).ready(function () {
    "use strict";
    
    $('#FlightOriginModal').on('modalClose', function(e) {
        $('#FlightOrigin').val($('#tmpFlightOrigin').val());
        $('#FlightOriginCityId').val($('#tmpFlightOriginListId').val());
    });	
    
    $('#FlightDestinationModal').on('modalClose', function(e) {
        $('#FlightDestination').val($('#tmpFlightDestination').val());
        $('#FlightDestinationCityId').val($('#tmpFlightDestinationListId').val());
    });
    
    $('.flight-location').on('keyup', findByName);
    $('.flight-location').on('focus', clear);

});


function findByName(e) {
    var $el = $(e.target);
    flightLocations.findByName($el.val()).done(function (locations) {
        var l = locations.length,
            $list = $('#' + $el.attr('id') + 'List'),
            location;

        $list.empty();
        
        for (var i = 0; i < l; i++) {
            location = locations[i];
            $list.append(
                '<li class="topcoat-list__item">'+
                '   <a href="javascript:void(0)" onclick="populateLocation(this)" '+ 
                '   data-id="' + location.Id + '" ' + 'data-name="' + location.Name + '" >' +
                '       <span class="icon pe-7s-paper-plane pe-va pull-left"></span>' +
                '       <p>' + location.Name + '</p>'+
                '   </a>'+
                '</li>'
            );
        }
    });
};

function clear(e){
    $(e.target).val('');
    $(e.target).text('');
    $('#' + $(e.target).attr('id') + 'List').empty();
};

function populateLocation(el){
    var $el = $(el);
    var $idEl = $('#'+$el.parents('.location-list').attr('id')+'Id');
    $idEl.val($el.data('id')).prev().val($el.data('name'));
};