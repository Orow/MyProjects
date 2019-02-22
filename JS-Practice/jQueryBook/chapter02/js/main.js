//$(function () {
//    $('#typo')
//        .on('mouseover', function () {
//            $('#typo').animate.stop(true)({
//                backgroundColor: '#ae5e9b'
//            },
//            500
//          );
//        })
//        .on('mouseout', function () {
//            $('#typo').animate.stop(true)({
//                backgroundColor: '#3498db'
//            },
//            500
//        );
//   });
//});

// $(function () {
//     $('#typo .inner').on('click', function () {
//         $('#typo .inner').animate({
//             color: '#ebc000'
//             },
//             1500
//         );
//     });
// });

// $(function(){
//     $("#typo").css("color", "#ebc000");
//     $("#typo").css("transform", "rotate(10deg");
// });

$(function(){
    $("#typo").on("mouseover", function(){
        $("#typo").css({
            color: "#ebc000",
            background: "#ae5e9b"
        });
    });
    $("#typo").on("mouseout", function(){
        $("#typo").css({
            color: "",
            background: ""
        });
    });
});