function Weather() {
};

Weather.prototype._rollWeather = function() {
  let roll = Math.floor(Math.random() * 9 + 1);
  return(roll);
};

Weather.prototype.getWeather = function () {
  let roll = new Weather();
  if (roll._rollWeather() < 9) {return 'Clear';}
  return 'Stormy'
};

weather = new Weather();
console.log(weather.getWeather());
