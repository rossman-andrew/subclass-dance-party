var makeCatDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  $imgnode = $('<img src="./img/catGlow.gif"></img>');
  $(this.$node).append($imgnode).addClass('catDancer');
  this.$node.addClass('catDancerMoving');
};

makeCatDancer.prototype = Object.create(makeDancer.prototype);
makeCatDancer.prototype.constructor = makeCatDancer;
/*
makeCatDancer.prototype.oldStep = function() {
  makeDancer.prototype.step.call(this);
};
*/
/*makeCatDancer.prototype.step = function() {
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //this.$node.slideToggle('slow');

};
*/
makeCatDancer.prototype.lineUp = function() {
  // this.$node.addClass('leftAlign');
  this.$node.toggleClass('catDancerMoving');
  if (this.$node.hasClass('catDancerMoving')) {
    this.setPosition(this.top, $("body").width() * Math.random());
  } else {
    this.setPosition(this.top, 0);
  }
  
};