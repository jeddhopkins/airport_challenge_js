function Airport() {
  this.planes = []
};

Airport.prototype.land = function(plane, weather = new Weather()) {
  // let weather = new Weather();
  if (weather.getWeather() === 'Clear') {this.planes.push(plane)};
};

Airport.prototype.takeOff = function(plane) {
  for (let i= this.planes.length -1; i >= 0; i-- ) {
    if (this.planes[i] === plane) {
      this.planes.splice(i, 1);
    };
  };
};
