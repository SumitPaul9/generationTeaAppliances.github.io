// Project created by Sumit jindal c0754947

$(document).ready(function () {
   $("#fName").focus();                   // focus on textbox with id fname 
   $("#nav").highlightMenu();             // hightlight plugin 

   $("#contact_form").validate({         // use the id attribute to select the form
      rules: {
         fName: {
            required: true,               // required is true for fname textbox
         },
         lName: {                         // required is true for lname textbox
            required: true,
         },
         email: {                                                
            required: true,               // required is true for email textbox
            email: true                   //check for email 
         },
         phone: {
            required: true,               // required is true for phone textbox
            minlength: 10,                //minimum length is 10 
            phoneUs: true,                //uses format 
         },
         currentDate: {
            required: true,               // required is true for currentdate textbox
            date: true,                   //checks for date format
         },
         
      },

      messages: {
         fName: {
            required: "  First name required"   //message displayed on required error 
         },

         lName: {
            required: "  Last name required"    //message displayed on required error 
         },

         email: {                          // use name attributes to refer to fields
                     required: "  Email required", //message displayed on required error 
                     email: "  Not a valid email."  //message displayed on format error 
                  },

         phone: {
            required: "  Phone number required",     //message displayed on required error 

            phoneUs: "  Not a valid number",         //message displayed on format error 
         },
         
         arrival_: {
            required: "  Select a date",           //message displayed on required error 
            date: "  not valid date.",             //message displayed on format error 
         }, 
      },

   }); // end validate
}); // end ready
