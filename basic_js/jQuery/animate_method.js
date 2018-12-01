$(document).ready(function () {
    var box=$("div.box"),
        font_size=parseInt(box.css("font-size"));
    console.log(font_size);
    $("button").on("click", function () {
        box.animate({
            "fontSize": "+=5",
            "color": "white"
        });
    });
});