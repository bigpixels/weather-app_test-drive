'use strict';

function initialize() {
    let address = (document.getElementById('pac-input'));
    let autocomplete = new google.maps.places.Autocomplete(address);
    autocomplete.setTypes(['geocode']);
    google.maps.event.addListener(autocomplete, 'place_changed', function() {
        let place = autocomplete.getPlace();
        if (!place.geometry) {
            return;
        }

    let address = '';
    if (place.address_components) {
        address = [
            (place.address_components[0] && place.address_components[0].short_name || ''),
            (place.address_components[1] && place.address_components[1].short_name || ''),
            (place.address_components[2] && place.address_components[2].short_name || '')
            ].join(' ');
    }
    /*********************************************************************/
    /* var address contain your autocomplete address *********************/
    /* place.geometry.location.lat() && place.geometry.location.lat() ****/
    /* will be used for current address latitude and longitude************/
    /*********************************************************************/
    document.getElementById('lat').innerHTML = place.geometry.location.lat();
    document.getElementById('long').innerHTML = place.geometry.location.lng();
    });
}

google.maps.event.addDomListener(window, 'load', initialize);







////////черновик////////

// let searchBox = new google.maps.places.SearchBox(document.querySelector("#city-search"));
// searchBox.addListener('places_changed', function() {
//     let locale = searchBox.getPlaces()[0];
// });
// document.querySelector("#latitude").value = place.geometry.location.lat();
// document.querySelector("#longitude").value = place.geometry.location.lng();
// $.getJSON('https://api.darksky.net/forecast/[83222a5584605220420e32267a417267]/[latitude],[longitude]', function(forecast) {
//     console.log(forecast);
// });



// let geocoder = new google.maps.Geocoder();
// let address = document.getElementById("address").value;
// geocoder.geocode( { 'address': address}, function(results, status) {
//   if (status == google.maps.GeocoderStatus.OK) {
//       // do something with the geocoded result
//       results[0].geometry.location.latitude
//       results[0].geometry.location.longitude
//     }
// });



// function initMap() {
//     let opt = {
//         center: {lat: 46.444003, lng: 30.748728},
//         zoom: 10,
//     };
//     let map = new google.maps.Map(document.getElementById("map"), opt);
// }



// DarkSky API
// CORS requests are NOT allowed by the DarkSky server
// Requests from other Servers are allowed
// So, we would make a pass thru file on a server.
// Browser sends the fetch( ) AJAX request to OUR server
// OUR server sends the AJAX request to DarkSky server
// DarkSky responds to OUR Server
// OUR Server sends the DarkSky reply back to Browser
// Browser AJAX call => Our Server => DarkSky => Our Server => Browser AJAX call

// To simulate, we will make the call with NodeJS (outside a browser)
// this way, we can avoid the CORS issue.
// It requires installing node-fetch from the terminal
//  npm install node-fetch 
// Then add a require statement at the top of our script
//

// let fetch = require('node-fetch');

// //let uri = 'http://jsonplaceholder.typicode.com/users';
// let darksky = 'https://api.darksky.net/forecast/';
// let key = '83222a5584605220420e32267a417267';
// let lat = 46.444003;
// let lng = 30.748728;
// let uri = darksky + key + '/' + lat +','+ lng;
// console.log(uri);
// uri = uri.concat('?units=ca&exclude=minutely,hourly&lang=ru');
// // units - ca, si, us, uk
// // exclude - minutely,hourly,daily,currently
// // lang - 
// let options = {
//     method: 'GET',
//     mode: 'cors'
// }
// let req = new fetch.Request(uri, options);

// fetch(req)
//     .then((response)=>{
//         if(response.ok){
//             return response.json();
//         }else{
//             throw new Error('Bad HTTP!')
//         }
//     })
//     .then( (j) =>{
//         console.log(j.currently.temperature, j.currently.summary);
        
//         console.log( j.daily.data[1] );
//         //console.log('JSON data provided');
//     })
//     .catch( (err) =>{
//         console.log('ERROR:', err.message);
//     });