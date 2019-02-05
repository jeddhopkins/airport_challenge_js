describe('Airport', function() {

  let gatwick;

  beforeEach(function() {
    gatwick = new Airport();
  });

  describe('Creating the airport', function() {
    it('Airport array should be empty upon creation', function() {
      expect(gatwick.planes).toEqual([]);
    });
  });

  describe('landing planes at an airport', function() {
    it('after plane has landed, it should show a plane in the airport array', function() {
      gatwick.land('plane');
      expect(gatwick.planes).toEqual(['plane']);
    });

    it('lands multiple planes', function() {
      gatwick.land('plane1');
      gatwick.land('plane2');
      gatwick.land('plane3');
      expect(gatwick.planes).toEqual(['plane1','plane2','plane3'])
    });
  });

  describe('planes taking off from airport', function() {
    it('after a plane has taken off it no longer shows in the airport', function() {
      gatwick.land('plane');
      gatwick.takeOff('plane');
      expect(gatwick.planes).toEqual([]);
    });

    it('takes of a specific plane from an airport', function() {
      gatwick.land('plane1');
      gatwick.land('plane2');
      gatwick.land('plane3');
      gatwick.takeOff('plane2');
      expect(gatwick.planes).toEqual(['plane1','plane3']);
    });
  });
});
