const map = L.map('map').setView([0,0], 10);
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(map);

// const Stadia_StamenWatercolor = L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.{ext}', {
// 	minZoom: 1,
// 	maxZoom: 16,
// 	attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
// 	ext: 'jpg'
// });

// const OpenRailwayMap = L.tileLayer('https://{s}.tiles.openrailwaymap.org/standard/{z}/{x}/{y}.png', {
// 	maxZoom: 19,
// 	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Map style: &copy; <a href="https://www.OpenRailwayMap.org">OpenRailwayMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
// });

// const basemap = {

//     'Water color' : Stadia_StamenWatercolor,
//     'Railway map' : OpenRailwayMap

// }
// L.control.layers(basemaps).addto(map);

  const icon = L.icon({
    iconUrl: '.vscode/punch.png',
    iconSize: [50, 50],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
});

const marker = L.marker([28.65990999436421, 77.24233017338166], {icon}).addTo(map)
            .bindPopup('<b>Your journet start!')
            .openPopup();
              
 
 //Add current location start
if(!navigator.geolocation) {
    alert('Geolocation is not supported by your browser');
}

else
{
navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        map.setView([latitude, longitude], 20); 

//locator icon marker 

        enbleHighAccuracy: true
        timeout: 5000
        maximumAge: 6000  
    const icon = L.icon({
    iconUrl: '.vscode\\Screenshot 2026-06-04 171237.png',
    iconSize: [42, 42],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]


});

        const marker = L.marker([latitude, longitude], { icon }).addTo(map)
            .bindPopup('<b>You are here!</b> <br/> latitude: ' +
                latitude.toFixed(4) + "<br/>longitude: " + longitude.toFixed(4) + " " )
            .openPopup();
      
    //Add circle in buffer zone of 100m start
    const cmarkers = L.circleMarker([latitude, longitude], {
    radius: 100,
    fillColor: 'blue',
    color: 'black',
    weight: 1
  });
  cmarkers.addTo(map);
  
  //Add circle in buffer zone of 100m end

const featureGroup = L.featureGroup([marker, cmarkers]);
map.fitBounds(featureGroup.getBounds());
featureGroup.addTo(map);
  

// Leaflet search 
new L.Control.Geocoder().addTo(map);

//Add scale on map
L.control.scale({position:'bottomright'}).addTo(map);

//add measure control
L.control.measure().addto(map);

//Routing location  

map.on('click', function (e)
{
  console.log(e)
  const secondMarker= L.marker([e.latLng.lat, e.latLng.lng]).addto(map);
})


L.Routing.control({
  waypoints: [
    L.latLng(28.65990999436421, 77.24233017338166),

    L.latLng(28.577131688516847, 77.44910857238206)
    
  ]
  

  })
.addTo(map);

}).addTo(map);

} 
 
