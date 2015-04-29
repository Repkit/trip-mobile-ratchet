var flightAdapter = (function () {

    "use strict";

    var findById = function (id) {
            var deferred = $.Deferred(),
                flight = null,
                l = flights.length;
            for (var i = 0; i < l; i++) {
                if (flights[i].ItineraryCode === id) {
                    flight = flights[i];
                    break;
                }
            }
            deferred.resolve(flight);
            return deferred.promise();
        },

        findByName = function (searchKey) {
            var deferred = $.Deferred();
            var results = flights.filter(function (element) {
                return element.name.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
            });
            deferred.resolve(results);
            return deferred.promise();
        },

        fetchAll = function () {
            return flights;
        },

        flights = [{
                    "ItineraryCode": "11993e15fe70f952f7681f4d98da7f15:0",
                    "Price": "104.5",
                    "Currency": "USD",
                    "ReturnRoute": {
                        "Ref": "0",
                        "Duration": "1:30",
                        "Hash": "704436a102df78a21bcf71b7027bccaf",
                        "ItineraryCode": null,
                        "Segment": [{
                            "Aircraft": {
                                "Code": "319",
                                "_": "Airbus A319"
                            },
                            "Flight": {
                                "Number": "8407",
                                "Class": "E",
                                "NumberOfSeats": null,
                                "Meal": null
                            },
                            "Origin": {
                                "Date": "2015-09-21",
                                "Terminal": "1",
                                "Time": "09:20:00",
                                "Airport": {
                                    "Code": "CDG",
                                    "City": "Paris",
                                    "_": "Charles De Gaulle",
                                    "_data": []
                                }
                            },
                            "Destination": {
                                "Date": "2015-09-21",
                                "Terminal": "",
                                "Time": "10:50:00",
                                "Airport": {
                                    "Code": "TXL",
                                    "City": "Berlin",
                                    "_": "Tegel",
                                    "_data": {
                                        "isDestinationAirport": true
                                    }
                                }
                            },
                            "Carrier": {
                                "Marketing": {
                                    "Code": "4U",
                                    "_": "Germanwings"
                                },
                                "Operating": {
                                    "Code": "4U",
                                    "_": "Germanwings"
                                }
                            }
                        }]
                    },
                    "DepartureRoute": {
                        "AirportChange": false,
                        "MultipleAirlines": false,
                        "Ref": "0",
                        "Duration": "1:40",
                        "Hash": "651ca3036a0ea28c87a8a792ff6158b2",
                        "ItineraryCode": null,
                        "Segment": [{
                            "Aircraft": {
                                "Code": "319",
                                "_": "Airbus A319"
                            },
                            "Flight": {
                                "Number": "8404",
                                "Class": "E",
                                "NumberOfSeats": null,
                                "Meal": null
                            },
                            "Origin": {
                                "Date": "2015-09-20",
                                "Terminal": "",
                                "Time": "18:20:00",
                                "Airport": {
                                    "Code": "TXL",
                                    "City": "Berlin",
                                    "_": "Tegel",
                                    "_data": []
                                }
                            },
                            "Destination": {
                                "Date": "2015-09-20",
                                "Terminal": "1",
                                "Time": "20:00:00",
                                "Airport": {
                                    "Code": "CDG",
                                    "City": "Paris",
                                    "_": "Charles De Gaulle",
                                    "_data": {
                                        "isDestinationAirport": true
                                    }
                                }
                            },
                            "Carrier": {
                                "Marketing": {
                                    "Code": "4U",
                                    "_": "Germanwings"
                                },
                                "Operating": {
                                    "Code": "4U",
                                    "_": "Germanwings"
                                }
                            }
                        }]
                    }
                },
                {
                    "ItineraryCode": "11993e15fe70f952f7681f4d98da7f15:1",
                    "Price": "104.5",
                    "Currency": "USD",
                    "ReturnRoute": {
                        "Ref": "1",
                        "Duration": "1:30",
                        "Hash": "18973a128170be6779f7756519049f7a",
                        "ItineraryCode": null,
                        "Segment": [{
                            "Aircraft": {
                                "Code": "320",
                                "_": "Airbus A320-100/200"
                            },
                            "Flight": {
                                "Number": "8405",
                                "Class": "E",
                                "NumberOfSeats": null,
                                "Meal": null
                            },
                            "Origin": {
                                "Date": "2015-09-21",
                                "Terminal": "1",
                                "Time": "20:35:00",
                                "Airport": {
                                    "Code": "CDG",
                                    "City": "Paris",
                                    "_": "Charles De Gaulle",
                                    "_data": []
                                }
                            },
                            "Destination": {
                                "Date": "2015-09-21",
                                "Terminal": "",
                                "Time": "22:05:00",
                                "Airport": {
                                    "Code": "TXL",
                                    "City": "Berlin",
                                    "_": "Tegel",
                                    "_data": {
                                        "isDestinationAirport": true
                                    }
                                }
                            },
                            "Carrier": {
                                "Marketing": {
                                    "Code": "4U",
                                    "_": "Germanwings"
                                },
                                "Operating": {
                                    "Code": "4U",
                                    "_": "Germanwings"
                                }
                            }
                        }]
                    },
                    "DepartureRoute": {
                        "AirportChange": false,
                        "MultipleAirlines": false,
                        "Ref": "0",
                        "Duration": "1:40",
                        "Hash": "651ca3036a0ea28c87a8a792ff6158b2",
                        "ItineraryCode": null,
                        "Segment": [{
                            "Aircraft": {
                                "Code": "319",
                                "_": "Airbus A319"
                            },
                            "Flight": {
                                "Number": "8404",
                                "Class": "E",
                                "NumberOfSeats": null,
                                "Meal": null
                            },
                            "Origin": {
                                "Date": "2015-09-20",
                                "Terminal": "",
                                "Time": "18:20:00",
                                "Airport": {
                                    "Code": "TXL",
                                    "City": "Berlin",
                                    "_": "Tegel",
                                    "_data": []
                                }
                            },
                            "Destination": {
                                "Date": "2015-09-20",
                                "Terminal": "1",
                                "Time": "20:00:00",
                                "Airport": {
                                    "Code": "CDG",
                                    "City": "Paris",
                                    "_": "Charles De Gaulle",
                                    "_data": {
                                        "isDestinationAirport": true
                                    }
                                }
                            },
                            "Carrier": {
                                "Marketing": {
                                    "Code": "4U",
                                    "_": "Germanwings"
                                },
                                "Operating": {
                                    "Code": "4U",
                                    "_": "Germanwings"
                                }
                            }
                        }]
                    }
                },
                {
                    "ItineraryCode": "4f232895d107cf432d830b4f17480dc7:0",
                    "Price": "107.66",
                    "Currency": "USD",
                    "ReturnRoute": {
                        "Ref": "0",
                        "Duration": "01:30",
                        "Hash": "5e79654fddca1a54c029884ab470cc97",
                        "ItineraryCode": null,
                        "Segment": [{
                            "Aircraft": {
                                "Code": "319",
                                "_": "Airbus A319"
                            },
                            "Flight": {
                                "Number": "8407",
                                "Class": "E",
                                "NumberOfSeats": "4",
                                "Meal": "SNACK OR BRUNCH"
                            },
                            "Origin": {
                                "Date": "2015-09-21",
                                "Terminal": "1",
                                "Time": "09:20:00",
                                "Airport": {
                                    "Code": "CDG",
                                    "City": "Paris",
                                    "_": "Charles De Gaulle",
                                    "_data": []
                                }
                            },
                            "Destination": {
                                "Date": "2015-09-21",
                                "Terminal": null,
                                "Time": "10:50:00",
                                "Airport": {
                                    "Code": "TXL",
                                    "City": "Berlin",
                                    "_": "Tegel",
                                    "_data": {
                                        "isDestinationAirport": true
                                    }
                                }
                            },
                            "Carrier": {
                                "Marketing": {
                                    "Code": "4U",
                                    "_": "Germanwings"
                                },
                                "Operating": {
                                    "Code": "4U",
                                    "_": "Germanwings"
                                }
                            }
                        }]
                    },
                    "DepartureRoute": {
                        "AirportChange": false,
                        "MultipleAirlines": false,
                        "Ref": "0",
                        "Duration": "01:40",
                        "Hash": "2b8baca0a0e52548ed0ec279e9ab2ac8",
                        "ItineraryCode": null,
                        "Segment": [{
                            "Aircraft": {
                                "Code": "319",
                                "_": "Airbus A319"
                            },
                            "Flight": {
                                "Number": "8404",
                                "Class": "E",
                                "NumberOfSeats": "4",
                                "Meal": "SNACK OR BRUNCH"
                            },
                            "Origin": {
                                "Date": "2015-09-20",
                                "Terminal": null,
                                "Time": "18:20:00",
                                "Airport": {
                                    "Code": "TXL",
                                    "City": "Berlin",
                                    "_": "Tegel",
                                    "_data": []
                                }
                            },
                            "Destination": {
                                "Date": "2015-09-20",
                                "Terminal": "1",
                                "Time": "20:00:00",
                                "Airport": {
                                    "Code": "CDG",
                                    "City": "Paris",
                                    "_": "Charles De Gaulle",
                                    "_data": {
                                        "isDestinationAirport": true
                                    }
                                }
                            },
                            "Carrier": {
                                "Marketing": {
                                    "Code": "4U",
                                    "_": "Germanwings"
                                },
                                "Operating": {
                                    "Code": "4U",
                                    "_": "Germanwings"
                                }
                            }
                        }]
                    }
                },
                {
                    "ItineraryCode": "4f232895d107cf432d830b4f17480dc7:1",
                    "Price": "107.66",
                    "Currency": "USD",
                    "ReturnRoute": {
                        "Ref": "1",
                        "Duration": "01:30",
                        "Hash": "11943b73464245b09d7503a537863c80",
                        "ItineraryCode": null,
                        "Segment": [{
                            "Aircraft": {
                                "Code": "320",
                                "_": "Airbus A320-100/200"
                            },
                            "Flight": {
                                "Number": "8405",
                                "Class": "E",
                                "NumberOfSeats": "4",
                                "Meal": "SNACK OR BRUNCH"
                            },
                            "Origin": {
                                "Date": "2015-09-21",
                                "Terminal": "1",
                                "Time": "20:35:00",
                                "Airport": {
                                    "Code": "CDG",
                                    "City": "Paris",
                                    "_": "Charles De Gaulle",
                                    "_data": []
                                }
                            },
                            "Destination": {
                                "Date": "2015-09-21",
                                "Terminal": null,
                                "Time": "22:05:00",
                                "Airport": {
                                    "Code": "TXL",
                                    "City": "Berlin",
                                    "_": "Tegel",
                                    "_data": {
                                        "isDestinationAirport": true
                                    }
                                }
                            },
                            "Carrier": {
                                "Marketing": {
                                    "Code": "4U",
                                    "_": "Germanwings"
                                },
                                "Operating": {
                                    "Code": "4U",
                                    "_": "Germanwings"
                                }
                            }
                        }]
                    },
                    "DepartureRoute": {
                        "AirportChange": false,
                        "MultipleAirlines": false,
                        "Ref": "0",
                        "Duration": "01:40",
                        "Hash": "2b8baca0a0e52548ed0ec279e9ab2ac8",
                        "ItineraryCode": null,
                        "Segment": [{
                            "Aircraft": {
                                "Code": "319",
                                "_": "Airbus A319"
                            },
                            "Flight": {
                                "Number": "8404",
                                "Class": "E",
                                "NumberOfSeats": "4",
                                "Meal": "SNACK OR BRUNCH"
                            },
                            "Origin": {
                                "Date": "2015-09-20",
                                "Terminal": null,
                                "Time": "18:20:00",
                                "Airport": {
                                    "Code": "TXL",
                                    "City": "Berlin",
                                    "_": "Tegel",
                                    "_data": []
                                }
                            },
                            "Destination": {
                                "Date": "2015-09-20",
                                "Terminal": "1",
                                "Time": "20:00:00",
                                "Airport": {
                                    "Code": "CDG",
                                    "City": "Paris",
                                    "_": "Charles De Gaulle",
                                    "_data": {
                                        "isDestinationAirport": true
                                    }
                                }
                            },
                            "Carrier": {
                                "Marketing": {
                                    "Code": "4U",
                                    "_": "Germanwings"
                                },
                                "Operating": {
                                    "Code": "4U",
                                    "_": "Germanwings"
                                }
                            }
                        }]
                    }
                }];

    // The public API
    return {
        findById: findById,
        findByName: findByName,
        fetchAll: fetchAll
    };

}());