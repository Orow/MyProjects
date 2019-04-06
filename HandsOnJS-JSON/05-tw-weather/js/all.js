/*jslint browser:true */
'use strict';

var weatherConditions = new XMLHttpRequest();
var weatherForecast = new XMLHttpRequest();
var cObj;
var fObj;

// GET THE CONDITIONS
weatherConditions.open('get', 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=CWB-23657188-F80E-42A7-A592-8F0EB8D62E33&limit=1&offset=10', true);
weatherConditions.responseType = 'text';
weatherConditions.send(null);

weatherConditions.onload = function() {
    if (weatherConditions.status === 200){
        cObj = JSON.parse(weatherConditions.responseText); 
        console.log(cObj); 

        // area of taipei
        var taipeiDaan = cObj.records.location[0].parameter[0].parameterValue + " " + cObj.records.location[0].parameter[2].parameterValue;
        
        // temperature
        var daanTemp = cObj.records.location[0].weatherElement[3].elementValue;

        // Wind Speed
        var windSpeed = cObj.records.location[0].weatherElement[2].elementValue;
        
        document.getElementById('location').innerHTML = taipeiDaan;
        document.getElementById('station').innerHTML = "站別：" + cObj.records.location[0].locationName;
        document.getElementById('temperature').innerHTML = daanTemp;
        document.getElementById('desc').innerHTML = "Wind Speed: "+ windSpeed;

    } //end if
}; //end function


// GET THE FORECARST
weatherForecast.open('get', 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-061?Authorization=CWB-23657188-F80E-42A7-A592-8F0EB8D62E33&limit=1&offset=7', true);
weatherForecast.responseType = 'text'; 
weatherForecast.send();

weatherForecast.onload = function() {
if (weatherForecast.status === 200){
	fObj = JSON.parse(weatherForecast.responseText);
    console.log(fObj);
    // title
    var area_raw = fObj.records.locations[0].datasetDescription;
    area_raw = area_raw.substring(7,17) + area_raw.substring(21);

    // weather situation
    var weatherSituation = fObj.records.locations[0].location[0].weatherElement[1].description;

    // temperature
    var currentTemp = fObj.records.locations[0].location[0].weatherElement[3].description

    // rainPrecent
    var rainPrecent = fObj.records.locations[0].location[0].weatherElement[7].description

    document.getElementById('area').innerHTML ='臺北市大安區' + area_raw;
    document.getElementById('r1c1').innerHTML = "日期";
    document.getElementById('r1c2').innerHTML= weatherSituation;
    document.getElementById('r1c3').innerHTML = currentTemp;
    document.getElementById('r1c4').innerHTML = rainPrecent;





    // date
    var date_raw = fObj.records.locations[0].location[0].weatherElement[1].time[3].startTime;
    date_raw = date_raw.substring(5,11);

    // weather situation
    var weatherSituation = fObj.records.locations[0].location[0].weatherElement[1].time[3].elementValue[0].value;

    // temperature
    var currentTemp = fObj.records.locations[0].location[0].weatherElement[3].time[3].elementValue[0].value;

    // rainPrecent
    var rainPrecent = fObj.records.locations[0].location[0].weatherElement[7].time[2].elementValue[0].value
    

    document.getElementById('area').innerHTML ='臺北市大安區' + area_raw;
    document.getElementById('r2c1').innerHTML = date_raw;
    document.getElementById('r2c2').innerHTML= weatherSituation;
    document.getElementById('r2c3').innerHTML = currentTemp + "&deg";
    document.getElementById('r2c4').innerHTML = rainPrecent + "%";
    





    // date
    var date_raw = fObj.records.locations[0].location[0].weatherElement[1].time[11].startTime;
    date_raw = date_raw.substring(5,11);

    // weather situation
    var weatherSituation = fObj.records.locations[0].location[0].weatherElement[1].time[11].elementValue[0].value;

    // temperature
    var currentTemp = fObj.records.locations[0].location[0].weatherElement[3].time[11].elementValue[0].value;

    // rainPrecent
    var rainPrecent = fObj.records.locations[0].location[0].weatherElement[7].time[6].elementValue[0].value
    

    document.getElementById('r3c1').innerHTML = date_raw;
    document.getElementById('r3c2').innerHTML= weatherSituation;
    document.getElementById('r3c3').innerHTML = currentTemp + "&deg";
    document.getElementById('r3c4').innerHTML = rainPrecent + "%";







    // date
    var date_raw = fObj.records.locations[0].location[0].weatherElement[1].time[19].startTime;
    date_raw = date_raw.substring(5,11);

    // weather situation
    var weatherSituation = fObj.records.locations[0].location[0].weatherElement[1].time[19].elementValue[0].value;

    // temperature
    var currentTemp = fObj.records.locations[0].location[0].weatherElement[3].time[19].elementValue[0].value;

    // rainPrecent
    var rainPrecent = fObj.records.locations[0].location[0].weatherElement[7].time[10].elementValue[0].value
    

    document.getElementById('r4c1').innerHTML = date_raw;
    document.getElementById('r4c2').innerHTML= weatherSituation;
    document.getElementById('r4c3').innerHTML = currentTemp + "&deg";
    document.getElementById('r4c4').innerHTML = rainPrecent + "%";
    
    

} //end if
}; //end function

 