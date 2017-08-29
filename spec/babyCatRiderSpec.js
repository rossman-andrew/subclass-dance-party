describe('babyCatRider', function() {

  var babyCatRider, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    babyCatRider = new makeBabyCatRider(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(babyCatRider.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a line up function that toggles a position class for its nodes', function() {
    console.log(babyCatRider.$node.position());
    sinon.spy(babyCatRider.$node, 'toggleClass');
    babyCatRider.lineUp();
    expect(babyCatRider.$node.toggleClass.called).to.be.true;
  });
});
