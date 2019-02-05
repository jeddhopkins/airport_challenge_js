describe('Weather', function() {
  let weather;

  beforeEach(function() {
    weather = new Weather();
  });

  it('returns clear or stormy', function() {
    expect(weather.getWeather()).toEqual("Clear")
  });
});
