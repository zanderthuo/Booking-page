var searchInput = 'search_input';

            $(document).ready(function () {
                var autocomplete;
                autocomplete = new google.maps.places.Autocomplete((document.getElementById(searchInput)), {
                    types: ['geocode'],
                });

                var input = document.getElementById('search_input');
                    var options = {
                    types: ['(cities)'],
                    componentRestrictions: {country: 'ke'}
                    };

                autocomplete = new google.maps.places.Autocomplete(input, options);
                
                autocomplete.addListener(autocomplete, 'place_changed', function () {
                    var near_place = autocomplete.getPlace();
                    console.log(place.geometry.location.lat())
                    $('#lat').val(place.geometry.location.lat());
                    $('#long').val(place.geometry.location.lng());
                });
            });

            var map1 = new google.maps.Map(document.getElementById('mapsearch'),{
                center:{
                    lat: 27.72,
                    lng: 85.36
                },
                zoom:15
            });

            var marker = new google.maps.Marker({
                position:{
                    lat: 27.72,
                    lng: 85.36
                },
                map:map,
                draggable: true
            });