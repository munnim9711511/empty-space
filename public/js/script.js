$(function(){
  // $('.slider').slider({
  //   height:"700px"
  // });
 $(".button-collapse").sideNav();

setInterval(function() {
   $('.slider').slider();
}, 6000); // every 2 seconds

Materialize.updateTextFields();

})
