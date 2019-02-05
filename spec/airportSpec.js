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
});
