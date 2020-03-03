// Project created by Sumit jindal c0754947

$(document).ready(function () {

   $("#nav").highlightMenu();                         //hightlight plugin for the menubar with id nav
   $.getJSON("product.json", function (data) {        //Uses product.json file to get data
      $("table").append(                              //appends to the tag table with the following HTML 
         "<tr>" +
         "<th>Name</th>" +
         "<th>Stock#</th>" +
         "<th>Quantity</th>" +
         "<th>Color</th>" +
         "<th>Price</th>" +
         "</tr>"
      );

      $.each(data, function () {

         $.each(this, function (key, value) {         //key and value are data attributes from the Json file 
            $("table").append(
               "<tr>" +
               "<td>" + value.Name + "</td> " +       // get value of name key of a Json object 
               "<td>" + value.Stock + "</td>" +       // get value of stock key of a Json object 
               "<td>" + value.Quantity + "</td>" +    // get value of quantity key of a Json object 
               "<td> " + value.Color + "</td>" +      // get value of color key of a Json object 
               "<td> " + value.price + "</td>" +      // get value of price key of a Json object 
               "</tr>"
            );
         });
      });
   });
});