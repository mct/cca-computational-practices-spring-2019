var weather;
var windSpeed;
var city;

function preload() {
  var zipCode = "94110";
  var ID = "PUT YOUR ID HERE";
  var SECRET = "PUT YOUR SECRET HERE";

  var url = 'https://api.aerisapi.com/observations/' + zipCode + '?client_id=' + ID + '&client_secret=' + SECRET;
  print("Fetching", url);
  weather = loadJSON(url);
}

function setup() {
  createCanvas(400, 200);

  place = weather.response.place.name + ", " + weather.response.place.state;
  print("Location:", place);

  windSpeed = weather.response.ob.windMPH;
  print("Wind Speed:", windSpeed);

}

function draw() {
  background(220);
  
  for (var y = 20; y < height-10; y += 20) {
    line(20, y, 20+random(4) + windSpeed * 10, y+random(-2, 2));
  }
}
