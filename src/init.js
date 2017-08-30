$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      ($("body").height() - 255) * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);

    window.dancers.push(dancer);
    // console.log($(window.dancers[0]).$node.position());
  });

  $('.lineUpButton').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp();
    }
  });

  $('body').on('mouseover', '.dancer', function(event) {  
    $(this).fadeToggle();
  });

  $('.danceOff').on('click', function(event) {
    var shortestDistance = {
      dist: Number.MAX_VALUE,
      dancer1: -1,
      dancer2: -1
    };
    for (var i = 0; i < $('.blinkyDancer').length; i++) {
      // console.log($($('.blinkyDancer')[i]).position());
      for (var j = i + 1; j < $('.blinkyDancer').length; j++) {
        var dancer1 = $($('.blinkyDancer')[i]);
        var dancer2 = $($('.blinkyDancer')[j]);
        var distance = findDistance(dancer1.position().top, dancer1.position().left, dancer2.position().top, dancer2.position().left);
        if (distance < shortestDistance.dist) {
          shortestDistance.dist = distance;
          shortestDistance.dancer1 = dancer1;
          shortestDistance.dancer2 = dancer2;
        }
      }
    }
    return shortestDistance;
  });

  var findDistance = function(top1, left1, top2, left2) {
    yLength = (top1 - top2);
    xLength = (left1 - left2);
    return Math.sqrt(yLength * yLength + xLength * xLength);
  };  

    

});

