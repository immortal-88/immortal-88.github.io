/**
 * Created by apple on 25.03.16.
 */

// T I M E R

document.body.style.background = "black";

// V A R I A B L E S
var millis, seconds, minutes, hours, counter;
millis = seconds = minutes = hours = counter = 0;
var splitCounter = 1;
var interval = null;

// I N I T I A L I Z I N G   E L E M E N T S
// Clock face
var timeText = document.createElement('p');
timeText.innerHTML = '00:00:00.000';
timeText.id = 'time-text';
document.body.appendChild(timeText);

// Buttons
var buttonBox = document.createElement('div');
buttonBox.id = 'button-box';
document.body.appendChild(buttonBox);

// Split button results
var timeResults = document.createElement('div');
timeResults.id = 'time-results';
document.body.appendChild(timeResults);

var startButton = document.createElement('button');
startButton.className = 'btn btn-success';
startButton.id = 'start-button';
startButton.innerHTML = 'Start';
buttonBox.appendChild(startButton);

var splitButton = document.createElement('button');
splitButton.className = 'btn btn-warning';
splitButton.id = 'split-button';
splitButton.innerHTML = 'Split';
buttonBox.appendChild(splitButton);

var resetButton = document.createElement('button');
resetButton.className = 'btn btn-primary';
resetButton.id = 'reset-button';
resetButton.innerHTML = 'Reset';
buttonBox.appendChild(resetButton);

// L I S T E N E R S
startButton.addEventListener('click', function() {
    if(startButton.innerHTML == 'Start') {
        startButton.innerHTML = 'Stop';
        startButton.className = 'btn btn-danger';
        startButton.style.transition = "all .6s";
        // Set interval
        interval = setInterval(function() {
            timer();
        }, 10);
        splitButton.disabled = false;
    } else {
        startButton.innerHTML = 'Start';
        startButton.className = 'btn btn-success';
        startButton.style.transition = "all .6s";
        clearInterval(interval);
        var stop = document.createElement('p');
        stop.innerHTML = 'Stopped: ' + timeText.textContent;
        timeResults.appendChild(stop);
        splitButton.disabled = true;
    }
});

splitButton.addEventListener('click', function() {
    if(timeText.textContent != '00:00:00.000') {
        var split = document.createElement('p');
        split.innerHTML = splitCounter +' lap:' + timeText.textContent;
        timeResults.appendChild(split);
        splitCounter++;
    }
});

resetButton.addEventListener('click', function() {
    clearInterval(interval);
    timeText.innerHTML = '00:00:00.000';
    timeResults.innerHTML = '';
    millis = seconds = minutes = hours = counter = 0;
    startButton.innerHTML = 'Start';
    startButton.className = 'btn btn-success';
    splitCounter = 1;
});

// F U N C T I O N S
// Timer count
function timer() {
    var dynamicTime = new Date().getTime();
    counter += 11;
    millis = dynamicTime - (dynamicTime - counter);

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

document.getElementById('start-button').onclick = (function() {
    document.getElementsByTagName('audio')[0].play();
    return false;
});