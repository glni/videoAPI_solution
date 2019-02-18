$(document).ready(function () {

    var current_time = 0;
    var my_video = $("#about_video");
    var c_welcome = $("#content_welcome");
    var c_coffee = $("#content_coffee");
    var c_baked = $("#content_baked_goods");
    var c_promise = $("#content_promise");
    var allAsides = $("aside");

    my_video.on("timeupdate", function () {
        // [0] is selecting the DOM element instead of a jQuery Element
        current_time = my_video[0].currentTime;

        if (current_time < 8.75){
            allAsides.hide();
            c_welcome.show();
        }

        if (current_time > 8.75){
            allAsides.hide();
            c_coffee.show();
        }

        if (current_time > 22.4){
            allAsides.hide();
            c_baked.show();
        }

        if (current_time > 29.2){
            allAsides.hide();
            c_promise.show();
        }

        if (current_time > 45){
            allAsides.hide();
            c_welcome.show();
        }

    });


});