var makeCatDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  $imgnode = $('<img src="./img/cat.gif"></img>');
  $(this.$node).append($imgnode).addClass('catDancer');
};

makeCatDancer.prototype = Object.create(makeDancer.prototype);
makeCatDancer.prototype.constructor = makeCatDancer;

makeCatDancer.prototype.oldStep = function() {
  makeDancer.prototype.step.call(this);
};

makeCatDancer.prototype.step = function() {
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //this.$node.slideToggle('slow');

};

makeCatDancer.prototype.lineUp = function() {
  this.$node.addClass('leftAlign');
};