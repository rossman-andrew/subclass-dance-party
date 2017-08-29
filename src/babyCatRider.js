var makeBabyCatRider = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  $imgnode = $('<img src="./img/babyCat.gif"></img>');
  $(this.$node).append($imgnode).addClass('catDancer');
  $(this.$node).addClass('catDancerMoving');
};

makeBabyCatRider.prototype = Object.create(makeDancer.prototype);
makeBabyCatRider.prototype.constructor = makeBabyCatRider;

makeBabyCatRider.prototype.lineUp = function() {
  // this.$node.addClass('leftAlign');
  this.$node.toggleClass('catDancerMoving');
  if (this.$node.hasClass('catDancerMoving')) {
    this.setPosition(this.top, $("body").width() * Math.random());
  } else {
    this.setPosition(this.top, $("body").width() - $("body").width() * 0.15);
  }
  
};