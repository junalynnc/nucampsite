// jQuery Ready function       
$(function() {

    // element with class carousel
    // carousel() is a function in Bootstrap
    $(".carousel").carousel( { interval: 2000 }); //2000 = 2 seconds

    // element with id of carouselButton
    // click() function
    $("#carouselButton").click(function(){

        // does the i tag have the class "fa-pause"?, returns Boolean value of true or false
       if ($("#carouselButton").children("i").hasClass("fa-pause")) {

            // tells the carousel to pause (stop), pause is a value in bootstrap
           $(".carousel").carousel("pause");

           // remove the class "fa-pause" from the i tag
           $("#carouselButton").children("i").removeClass("fa-pause");

           // add the class "fa-play" to the i tag
           $("#carouselButton").children("i").addClass("fa-play");
       } else {               

            // tells the carousel to cycle (start)
           $(".carousel").carousel("cycle");
           $("#carouselButton").children("i").removeClass("fa-play");
           $("#carouselButton").children("i").addClass("fa-pause");
       }
    });

    // reserve campsite button
    $("#reserveButton").click(function(){
        // option "show" will open the modal
        $("#reserveModal").modal("show");
    });

    // login button
    $("#loginButton").click(function(){
        // option "show" will open the modal
        $("#loginModal").modal("show");
    });
});

