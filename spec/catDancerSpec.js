describe('catDancer', function() {

  var catDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    catDancer = new makeCatDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(catDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a line up function that toggles a position class for its nodes', function() {
    console.log(catDancer.$node.position());
    sinon.spy(catDancer.$node, 'toggleClass');
    catDancer.lineUp();
    expect(catDancer.$node.toggleClass.called).to.be.true;
  });
});
