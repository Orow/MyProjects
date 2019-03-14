function submitAnswers() {
    var total = 5;
    var scroe = 0;

    // Get User Input
    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;
    var q5 = document.forms["quizForm"]["q5"].value;

    // Validation
    for (var i = 1; i <= total; i++) {
        // qi, q固定i是迴圈=>eval('q'+ i )
        if (eval('q'+i) == null || eval('q'+i) == "") {
            alert('You missed question ' + i);
            return false;
        }
    }

}