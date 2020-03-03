// Project created by Sumit jindal c0754947

$(document).ready(function () {
   $("#accordion").accordion(            //accordion plugin for toggle 
      {
         event: "mouseover",             //event for toggle is mouseover 
         heightStyle: "content",         //amount of collapse is to the content 
         collapsible: true               
      });
      for(var i=0;i<1500;i++){             // for loop for transition of colors on text
      $('#accordion p').animate({color:'red',event: "hover", reverse:true,},100);    // color style red and time is 4 seconds 
      $('#accordion p').animate({color:'green',event: "hover", reverse:true,},100);  // color style green and time is 4 seconds
      $('#accordion p').animate({color:'yellow',event: "hover", reverse:true,},100); // color style yellow and time is 4 seconds
      $('#accordion p').animate({color:'orange',event: "hover", reverse:true,},100); // color style orange and time is 4 seconds
      $('#accordion p').animate({color:'black',event: "hover", reverse:true,},100); // color style black and time is 4 seconds
}});