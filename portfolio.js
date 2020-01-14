// Detect request animation frame
var scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow1 = document.querySelectorAll('.heading-border'); 
var elementsToShow2 = document.querySelectorAll('.logo-img1'); 
var elementsToShow3 = document.querySelectorAll('.logo-img2'); 
var elementsToShow4 = document.querySelectorAll('.logo-img3'); 
var elementsToShow5 = document.querySelectorAll('.logo-img4'); 
var elementsToShow6 = document.querySelectorAll('.bg-progress-bar2'); 
var elementsToShow7 = document.querySelectorAll('.my-img-img'); 
var elementsToShow8 = document.querySelectorAll('.who-guy'); 
var elementsToShow9 = document.querySelectorAll('.counter');
var elementsToShow10 = document.querySelectorAll('.card');

// Call the loop for the first time
function loop() {

    Array.prototype.forEach.call(elementsToShow2, function(element){
      if (isElementInViewport(element)) {
        element.classList.add('animate1');
      } else {
        element.classList.remove('animate1');
      }
    });


    Array.prototype.forEach.call(elementsToShow3, function(element){
        if (isElementInViewport(element)) {
          element.classList.add('animate2');
        } else {
          element.classList.remove('animate2');
        }
      });
  

      Array.prototype.forEach.call(elementsToShow4, function(element){
        if (isElementInViewport(element)) {
          element.classList.add('animate3');
        } else {
          element.classList.remove('animate3');
        }
      });
  
      Array.prototype.forEach.call(elementsToShow5, function(element){
        if (isElementInViewport(element)) {
          element.classList.add('animate4');
        } else {
          element.classList.remove('animate4');
        }
      });
  
      Array.prototype.forEach.call(elementsToShow6, function(element){
        if (isElementInViewport(element)) {
          element.classList.add('animate6');
        } else {
          element.classList.remove('animate6');
        }
      });
  
      Array.prototype.forEach.call(elementsToShow7, function(element){
        if (isElementInViewport(element)) {
          element.classList.add('animate7');
        } else {
          element.classList.remove('animate7');
        }
      });
  
      Array.prototype.forEach.call(elementsToShow1, function(element){
        if (isElementInViewport(element)) {
          element.classList.add('animate5');
        } else {
          element.classList.remove('animate5');
        }
      });
  
      Array.prototype.forEach.call(elementsToShow8, function(element){
        if (isElementInViewport(element)) {
          element.classList.add('animate8');
        } else {
          element.classList.remove('animate8');
        }
      });
 
      Array.prototype.forEach.call(elementsToShow9, function(element){
        if (isElementInViewport(element)) {
          element.classList.add('animate2');
        } else {
          element.classList.remove('animate2');
        }
      });
 

      Array.prototype.forEach.call(elementsToShow10, function(element){
        if (isElementInViewport(element)) {
          element.classList.add('animate9');
        } else {
          element.classList.remove('animate9');
        }
      });
 
      scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}


var a = 0;
$(window).scroll(function() {

  var oTop = $('.counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 4000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});