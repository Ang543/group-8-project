const jokeEl = document.getElementById('.jokeP')
const fromEl = document.getElementById('from')
const toEl = document.getElementById('to')
let apiMq = "XZSAH1ikLn8zpZjUGzEFqnthzNyKVjIY";
let apiOpenTrip = "5ae2e3f221c38a28845f05b604ac0aedf17596d60d10c95865fde816";

//get chuckjoke from api and display for user for every new trip
//dennis
function jokeData() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then(response => {
      if (!response.ok) {
        throw Error("Error");
      }
      return response.json();
    })
    .then(data => { 
      console.log(data.value)
      document.getElementById("jokeP").append(data.value)     
    })
    .catch(error => {
      console.log(error)
    });
  }

  showJoke = (dataObjects, div) => {
    const dataDiv = document.querySelector(div)
    dataObjects.forEach(dataObject => {
        const dataElement = document.createElement('p')
        dataElement.innerText= `Name: ${dataObject.name}`
        dataDiv.append(dataElement)
    })

}
  jokeData()

//capture user input for tansport mode
//hannah

// $("#mode").on("click", function() {
//   var mode = document.querySelector('input[name="modes"]:checked').value;
//   console.log(mode);
// });
//capture user input for to and from
//angelo

//capture user input for things they want to see
//hannah



//call Mq to get route using user inputs
//dennis

// default map layer
let map = L.map('map', {
  layers: MQ.mapLayer(),
  center: [35.791188, -78.636755],
  zoom: 12
});
  

  function runDirection(start, end) {
      
      // recreating new map layer after removal
      map = L.map('map', {
          layers: MQ.mapLayer(),
          center: [35.791188, -78.636755],
          zoom: 12
      });
      
      var dir = MQ.routing.directions();

      dir.route({
          locations: [
              start,
              end
          ]
      });
  

      CustomRouteLayer = MQ.Routing.RouteLayer.extend({
          createStartMarker: (location) => {
              var custom_icon;
              var marker;

              custom_icon = L.icon({
                  iconUrl: 'img/red.png',
                  iconSize: [20, 29],
                  iconAnchor: [10, 29],
                  popupAnchor: [0, -29]
              });

              marker = L.marker(location.latLng, {icon: custom_icon}).addTo(map);

              return marker;
          },

          createEndMarker: (location) => {
              var custom_icon;
              var marker;

              custom_icon = L.icon({
                  iconUrl: 'img/blue.png',
                  iconSize: [20, 29],
                  iconAnchor: [10, 29],
                  popupAnchor: [0, -29]
              });

              marker = L.marker(location.latLng, {icon: custom_icon}).addTo(map);

              return marker;
          }
      });
      
      map.addLayer(new CustomRouteLayer({
          directions: dir,
          fitBounds: true
      })); 
  }


// function that runs when form submitted
function submitForm(event) {
  event.preventDefault();

  // delete current map layer
  map.remove();

  // getting form data
  start = document.getElementById("start").value;
  end = document.getElementById("destination").value;

  // run directions function
  runDirection(start, end);

  // reset form
  document.getElementById("form").reset();
}

// asign the form to form variable
const form = document.getElementById('form');

// call the submitForm() function when submitting the form
form.addEventListener('button', submitForm);

//call opentrip to get attractions along route
//salieu

//allow user to save a trip
//angelo


//future problem-- what if user changes input