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

// change
$("select").change(function(){
var str ="";
$
("select option: selected").each(function(){
    str += $(this).text() + " ";
});
$("div").text(str);
});
change();

//Manipulation
// addClass()
$("p").last().addClass("selected");

// attr()
$("p:first").attr("style")
// -> "Hi" <= 原本p內容是"Hi"
$("p:first").attr("style", "Hello World")
// -> "Hello World"

// html()
$("p:last").html(<h2>123</h2>)