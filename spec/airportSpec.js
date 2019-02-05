describe('Airport', function() {

  let gatwick;

  beforeEach(function() {
    gatwick = new Airport();
  });

  describe('Creating the airport', function() {
    it('Airport array should be empty upon creation', function() {
      expect(gatwick.planes).toEqual([])
    });
  });

  describe('landing planes at an airport', function() {
    it('after plane has landed, it should show a plane in the airport array', function() {
      gatwick.land('plane');
      expect(gatwick.planes).toEqual(['plane']);
    })
  })
});
