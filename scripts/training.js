// Project created by Sumit jindal c0754947
$(document).ready(function () {
   $("#nav").highlightMenu();                            //highlight plugin for the menu bar 
   


    	var searchImage ="";                                   //declare a variable searchImage
    	$("#btnBrowse").click(function() {

         // Set the search term
      if ($("#search").val() == "") {
         alert("You must enter one or more tags!");
      }
			else {
         searchImage = $("#search").val();
      // Build the URL based on the search term
      var url = "http://api.flickr.com/services/feeds/photos_public.gne?" +
                      "format=json&jsoncallback=?&tags=" + searchImage + "&tagmode=all";

				$.getJSON(url, function(data){
					var html = "";                                  //Declare accumulator variable 
					$.each(data.items, function(i, item){

         html += "<img src=" + item.media.m + ">";             //accumulator for storing the Html tag 

      });
               $(".autoplay").html(html);
   });
      // $('.variable-width').slick({
      //    dots: true,
      //    infinite: true,
      //    speed: 300,
      //    slidesToShow: 1,
      //    centerMode: true,
      //    variableWidth: true
      // });
         $('.autoplay').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
         });
}
});
   

});