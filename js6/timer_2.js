/**
 * Created by apple on 25.03.16.
 */

// T I M E R

document.body.style.background = "black";

//var millis, seconds, minutes, hours, counter;
//millis = seconds = minutes = hours = counter = 0;

var millis = 59;
var seconds = 59;
var minutes = 59;
var hours = 23;
var counter = 0;

var interval = null;

// Timer count
function timer() {
    var dynamicTime = new Date().getTime();
    counter += 11;
    millis = dynamicTime - (dynamicTime - counter);

    //if(millis > 999 - 11) { // отрезаем все что выше 999 с вычетом шага счетчика
    //    counter = 0;
    //    seconds += 1;
    //}
    //if(millis.toString().length < 2) {
    //    sss.innerHTML = '00' + millis;
    //} else if(millis.toString().length < 3) {
    //    sss.innerHTML = '0' + millis;
    //} else {
    //    sss.innerHTML = millis;
    //}
    //if(seconds > 59) {
    //    seconds = 0;
    //    minutes += 1;
    //}
    //(seconds < 10) ? ss.innerHTML = '0' + seconds : ss.innerHTML = seconds;
    //if(minutes > 59) {
    //    minutes = 0;
    //    hours += 1;
    //}
    //(minutes < 10) ? mm.innerHTML = '0' + minutes : mm.innerHTML = minutes;
    //if(hours == 24) {
    //    millis = 0;
    //    seconds = 0;
    //    minutes = 0;
    //    hours = 0;
    //}
    //(hours < 10) ? HH.innerHTML = '0' + hours : HH.innerHTML = hours;
    //hours = addZero(hours, 2);
    //minutes = addZero(minutes, 2);
    //seconds = addZero(seconds, 2);

    if(millis > 999 - 11) { // отрезаем все что выше 999 с вычетом шага счетчика
        counter = 0;
        seconds += 1;
    }
    if(seconds > 59) {
        seconds = 0;
        minutes += 1;
    }
    if(minutes > 59) {
        minutes = 0;
        hours += 1;
    }
    if(hours == 24) {
        millis = 0;
        seconds = 0;
        minutes = 0;
        hours = 0;
    }
    var showMillis = addZero(millis, 3);
    var showSec = addZero(seconds, 2);
    var showMin = addZero(minutes, 2);
    var showHour = addZero(hours, 2);
    timeText.innerHTML = showHour + ":" + showMin + ":" + showSec + "." + showMillis;
}

function addZero(value, length) {
    while (value.toString().length < length) {
        value = "0" + value;
    }
    return value;
}

// Clock face
var timeText = document.createElement('p');
timeText.style.color ='red';
timeText.style.fontSize = '60px';
timeText.style.marginTop = '200px';
timeText.style.textAlign = 'right';
timeText.style.paddingRight = '150px';
timeText.style.fontFamily = 'Digital';
document.body.appendChild(timeText);
//var HH = document.createElement('span');
//HH.innerHTML = '00';
//var mm = document.createElement('span');
//mm.innerHTML = '00';
//var ss = document.createElement('span');
//ss.innerHTML = '00';
//var sss = document.createElement('span');
//sss.innerHTML = '000';
//var colon = document.createElement('span');
//colon.innerHTML = ':';
//var colon2 = document.createElement('span');
//colon2.innerHTML = ':';
//var point = document.createElement('span');
//point.innerHTML = '.';
//timeText.appendChild(HH);
//timeText.appendChild(colon);
//timeText.appendChild(mm);
//timeText.appendChild(colon2);
//timeText.appendChild(ss);
//timeText.appendChild(point);
//timeText.appendChild(sss);


// Split button results
var timeResults = document.createElement('div');
timeResults.style.textAlign = 'center';
timeResults.style.fontSize = '30px';
timeResults.style.fontFamily = 'Digital';
timeResults.style.marginBottom = '20px';
document.body.appendChild(timeResults);

// Buttons
var buttonBox = document.createElement('div');
buttonBox.style.width = '350px';
buttonBox.style.margin = '0 auto';
document.body.appendChild(buttonBox);


var startButton = document.createElement('button');
startButton.className = 'btn btn-success';
startButton.style.float = 'left';
startButton.style.textTransform = 'uppercase';
startButton.style.width = '100px';
startButton.innerHTML = 'Start';
buttonBox.appendChild(startButton);
startButton.addEventListener('click', function() {
    if(startButton.innerHTML == 'Start') {
        startButton.innerHTML = 'Stop';
        startButton.className = 'btn btn-danger';
        startButton.style.transition = "all .6s";
        // Set interval
        interval = setInterval(function() {
            timer();
        }, 10);
    } else {
        startButton.innerHTML = 'Start';
        startButton.className = 'btn btn-success';
        startButton.style.transition = "all .6s";
        clearInterval(interval);
        timeResults.innerHTML = timeText.textContent;
    }
});

var splitButton = document.createElement('button');
splitButton.className = 'btn btn-warning';
splitButton.style.marginLeft = '20px';
splitButton.style.textTransform = 'uppercase';
splitButton.style.width = '100px';
splitButton.style.float = 'left';
splitButton.innerHTML = 'Split';
buttonBox.appendChild(splitButton);
splitButton.addEventListener('click', function() {
    timeResults.innerHTML = timeText.textContent; // input data when stopped
});

var resetButton = document.createElement('button');
resetButton.className = 'btn btn-primary';
resetButton.style.marginLeft = '20px';
resetButton.style.width = '100px';
resetButton.style.textTransform = 'uppercase';
resetButton.style.float = 'left';
resetButton.innerHTML = 'Reset';
buttonBox.appendChild(resetButton);
resetButton.addEventListener('click', function() {
    clearInterval(interval);
    timeResults.innerHTML = "";
    //sss.innerHTML = '000';
    //ss.innerHTML = '00';
    //mm.innerHTML = '00';
    //HH.innerHTML = '00';
    millis = seconds = minutes = hours = counter = 0;
});
