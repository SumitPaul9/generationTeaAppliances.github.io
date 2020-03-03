// Project created by Sumit jindal c0754947

$(document).ready(function(){
   $('.bxslider').bxSlider({           //Slider for banner images with id bxslider
      mode:'fade',                     //fade to next slide 
      auto: true,                      //auto slideshow
      controls: false,                 //no controls for slider 
      pager : false,                   //no paging
      speed : 500,                     // speed for slideshow
      startSlide : 0                   //starting slide index
   });
   $("#nav").highlightMenu();          //hightlight plugin for the menu

   $("#card").flip({                   //flip the card of products with different id 
      // axis: 'x',
      trigger: 'hover',                //trigger on hover 
      reverse: true                    //reverses when mouse pointer goes  out of card area 
   });
   $("#card1").flip({
      // axis: 'x',
      trigger: 'hover',
      reverse: true
   });
   $("#card2").flip({
      // axis: 'x',
      trigger: 'hover',
      reverse: true
   });
   $("#card3").flip({
      // axis: 'x',
      trigger: 'hover',
      reverse: true
   });
   $("#card4").flip({
      // axis: 'x',
      trigger: 'hover',
      reverse: true
   });
   
   $("#card5").flip({
      // axis: 'x',
      trigger: 'hover',
      reverse: true
   });
   $("#card6").flip({
      // axis: 'x',
      trigger: 'hover',
      reverse: true
   });
   $("#card7").flip({
      // axis: 'x',
      trigger: 'hover',
      reverse: true
   });
   $("#card8").flip({
      // axis: 'x',
      trigger: 'hover',
      reverse: true
   });
   $("#card9").flip({
      // axis: 'x',
      trigger: 'hover',
      reverse: true
   });
});