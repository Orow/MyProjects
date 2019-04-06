var start = '{"favColor":"Orange", "favSeason": "Fall"}';

var myObject = JSON.parse(start);
console.log(myObject);

var myString = JSON.stringify(myObject);
console.log(myString);

// Single Level
var theData1 = '{"first":"Paul","last":"Cheney", "city":"Salem"}';
var myObj1 = JSON.parse(theData1);
console.log(myObj1);

document.getElementById('message').innerHTML = myObj1.city;


// Double Level
var theData2 = '{"Jane":{"age":"29", "degree":"MFA"}, "Jim":{"age":"49", "degree":"MA"}}';
var myObj2 = JSON.parse(theData2);
console.log(myObj2);
document.getElementById('message').innerHTML = myObj2.Jane.age;

// Triple Level
var theData3 = '{"Jane":{"age":"29", "degree":{"AAS":"VMI", "BA":"UVA"}}, "Jim":{"age":"49", "degree":"MA"}}';
var myObj3 = JSON.parse(theData3);
console.log(myObj3);
document.getElementById('message').innerHTML = myObj3.Jane.degree.AAS;

 