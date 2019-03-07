var myMonth = 3;
var thisMonth = 3;
var birthdayCheck = myMonth == thisMonth;
document.getElementById('birthdayId').textContent = birthdayCheck;

var currentPeople = 1;
var totalPeople = 4;
var peopleNothere = currentPeople != totalPeople ;
document.getElementById('peopleId').textContent = peopleNothere;