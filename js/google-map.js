let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat:10.776099988709019, lng:  106.66758487449474 },
    zoom: 19,
  });
  new google.maps.Marker({
    position: map.getCenter(),
    icon: {
      path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
      color:"red",
      scale: 8,
    },
    draggable: true,
    map: map,
  });
}