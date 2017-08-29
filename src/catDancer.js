var makeCatDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="catDancer"><img src="./img/cat.gif"></span>');
  makeDancer.prototype.setPosition.call(this, this.top, this.left);
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
  this.$node.slideToggle('slow');
};