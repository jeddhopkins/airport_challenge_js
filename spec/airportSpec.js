describe('Airport', function() {

  let gatwick;

  beforeEach(function() {
    gatwick = new Airport();
    // weather = new Weather();
  });

  describe('Creating the airport', function() {
    it('Airport array should be empty upon creation', function() {
      expect(gatwick.planes).toEqual([]);
    });
  });

  describe('landing planes with clear weather ', function() {
    var weather = jasmine.createSpyObj('weather', {'getWeather' : 'Clear'})
    it('after plane has landed, it should show a plane in the airport array', function() {
      gatwick.land('plane', weather);
      expect(gatwick.planes).toEqual(['plane']);
    });

    it('lands multiple planes', function() {
      gatwick.land('plane1', weather);
      gatwick.land('plane2', weather);
      gatwick.land('plane3', weather);
      expect(gatwick.planes).toEqual(['plane1','plane2','plane3']);
    });


     // it('doesnt land in stormy weather', function() {
     //   gatwick.land('plane');
     //   expect(gatwick.planes).toEqual([]);
     // });
  });

  describe('planes taking off from airport', function() {
    it('after a plane has taken off it no longer shows in the airport', function() {
      gatwick.planes = (['plane']);
      gatwick.takeOff('plane');
      expect(gatwick.planes).toEqual([]);
    });

    it('takes of a specific plane from an airport', function() {
      gatwick.planes = (['plane1','plane2','plane3']);
      gatwick.takeOff('plane2');
      expect(gatwick.planes).not.toContain(['plane2']);
    });
  });
});
