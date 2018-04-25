# subclass-dance-party
*An exploration in polymorphism and inheritance.*

This is a project I completed as a student at [hackreactor](http://hackreactor.com). This project was worked on with a pair.

## High Level Goals of this Sprint
* Master subclassing in JavaScript
* Use JavaScript, jQuery, and CSS to add unique effects to your application
* Be focused and deadline-oriented around design choices
* Familiarize yourself with polymorphism

## Polymorphism
When constructing applications, it is often the case that you will need to construct objects that share common methods or traits. Dancers, for example, all display individual unique traits, however they also share the ability to dance, to stop dancing, and to line up. By creating dancers that are subclasses of a Dancer class, you can exhibit individuality while allowing your dancers to inherit useful methods from their superclass. This ability of the Dancer class to manifest in various subclass forms is polymorphism.

## Bare Minimum Requirements
This sprint gives you a substantial amount of creative freedom. We recommend that you read through all the requirements and hold a short planning session with your pair to discuss what your final product will be.

* Refactor the Dancer class and its subclass BlinkyDancer from functional inheritance to pseudoclassical.
* Make at least two new kinds of dancers. This will require creating a new factory function for each one (and making sure that your new JavaScript files are included in dancefloor.html).
* Add a link in the top bar of dancefloor.html to create a dancer of each new type you create
* Write tests for new types. Use spec/blinkyDancerSpec.js as a template for new test files, and make sure to include them in SpecRunner.html.
* Make your dancers visually distinct and adorable with CSS and JS!
* Make a button that, when clicked, tells all the dancers to line up against one side of the dance floor. Remember you've got a global array of all created dancers (it's defined in src/init.js) so you can loop through that array and tell each object to lineUp. You'll need to add a lineUp method to each of your dancer types - they don't all have to do exactly the same thing.
* Use an image (<img> tag or CSS background-image) instead of plain-jane RGB to add some pizazz!
* Make dancers that interact with other dancers. For example, by iterating across the array window.dancers and using the Pythagorean Theorem to calculate your distance from each other dancer, you can have a dancer find its n closest neighbors and do something based on their positions.
* Make a dancer that reacts to the mouse (use jQuery to add a mouseover handler).
* Do any remaining work to make your dance party a presentable product. Take a screencast of it and post it on Slack.
Tests
* Go back and add at least two additional unit tests. If possible, try to add tests that will require you improve your implementation in order to make them pass.