/**
 * Created by apple on 25.03.16.
 */

// T I M E R

document.body.style.background = "black";

var millis, seconds, minutes, hours, counter;
millis = seconds = minutes = hours = counter = 0;

var interval = null;

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

// Clock face
var timeText = document.createElement('p');
timeText.innerHTML = '00:00:00.000';
timeText.style.color ='red';
timeText.style.fontSize = '60px';
timeText.style.marginTop = '200px';
timeText.style.textAlign = 'center';
timeText.style.fontFamily = 'Digital';
document.body.appendChild(timeText);

// Buttons
var buttonBox = document.createElement('div');
buttonBox.style.width = '350px';
buttonBox.style.height = '50px';
buttonBox.style.margin = '0 auto';
document.body.appendChild(buttonBox);

// Split button results
var timeResults = document.createElement('div');
timeResults.style.textAlign = 'center';
timeResults.style.fontSize = '20px';
timeResults.style.fontFamily = 'Digital';
timeResults.style.marginBottom = '20px';
timeResults.style.color = 'white';
document.body.appendChild(timeResults);

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
        splitButton.disabled = false;
    } else { // work here
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

var splitCounter = 1;

var splitButton = document.createElement('button');
splitButton.className = 'btn btn-warning';
splitButton.style.marginLeft = '20px';
splitButton.style.textTransform = 'uppercase';
splitButton.style.width = '100px';
splitButton.style.float = 'left';
splitButton.innerHTML = 'Split';
buttonBox.appendChild(splitButton);
splitButton.addEventListener('click', function() {
    if(timeText.textContent != '00:00:00.000') {
        var split = document.createElement('p');
        split.innerHTML = splitCounter +' lap:' + timeText.textContent;
        timeResults.appendChild(split);
        splitCounter++;
    }
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
    timeText.innerHTML = '00:00:00.000';
    timeResults.innerHTML = '';
    millis = seconds = minutes = hours = counter = 0;
    startButton.innerHTML = 'Start';
    startButton.className = 'btn btn-success';
    splitCounter = 1;
});


