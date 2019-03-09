// ----querySelector----

// var el = document.getElementById('titleId')
// el.textContent = '321123';

// var el = document.querySelector('#titleId')
// el.textContent = '2333';

// var el = document.querySelector('#titleId em')
// el.textContent = '2333444';

// ----querySelectorAll----

var elLen = document.querySelectorAll('.titleClass em')

for (var i = 0 ; i < elLen.length ; i++){
    elLen[i].textContent = 'Chapter' + (i + 1);
} 