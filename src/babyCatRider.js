var makeBabyCatRider = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  $imgnode = $('<img src="./img/babyCat.gif"></img>');
  $(this.$node).append($imgnode).addClass('catDancer');
  $(this.$node).addClass('catDancerMoving');
};

makeBabyCatRider.prototype = Object.create(makeDancer.prototype);
makeBabyCatRider.prototype.constructor = makeBabyCatRider;

// makeBabyCatRider.prototype.lineUp = function() {
//   this.$node.addClass('rightAlign');
// };