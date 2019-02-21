// jQuery Practice
// Effects
// show()

$("button").click(function () {
    $("p").show("slow")
});

// animate

$("#clickme").click(funciton(){
    $("#book").animate({
        opacity: 0.25,
        left: "toggle"
    }, 5000, function(){
        //Animation complete
    });
});

// Events
// bind
// $("#foo").bind("click", function(){
// => #("#foo").click(function(){