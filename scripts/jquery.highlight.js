// Project created by Sumit jindal c0754947

(function($){
      $.fn.highlightMenu = function(){
         return this.each(function(){
            var items = $("li a"); 
            items.css('font-family', 'arial, helvetica, sans-serif')
            .css('font-weight', 'bold')
            .css('text-decoration', 'none')
            .css('background-color', '#ffffff')
            .css('color', '#cc1c0d')
            .css('width', '125px'); 
            items.mouseover(function () { 
               $(this).css('background-color', '#0a0a0a')
               .css('color', '#ffffff'); 
            }); 
            items.mouseout(function () { 
               $(this).css('background-color', '#dfe3e6')
               .css('color', '#cc1c0d');
             }); 
         });
      }
   })(jQuery);