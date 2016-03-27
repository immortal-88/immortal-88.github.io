/**
 * Created by apple on 25.03.16.
 */

// T I M E R

document.body.style.background = "black";

var millis = 0;
var seconds = 0;
var minutes = 0;
var hours = 0;

var interval = null;
var staticTime = new Date().getTime();

// Timer count
function timer() {
    //millis += 1;
    //if(millis > 99) {
    //    millis = 0;
    //    seconds += 1;
    //} else if(seconds > 59) {
    //    seconds = 0;
    //    minutes += 1;
    //} else if(minutes > 59) {
    //    minutes = 0;
    //    hours += 1;
    //} else if(hours == 24) {
    //    millis = 0;
    //    seconds = 0;
    //    minutes = 0;
    //    hours = 0;
    //}
    //timeText.innerHTML = hours + ":" + minutes + ":" + seconds + "." + millis;

    var dynamicTime = new Date().getTime();
    var counter = 1;
    counter += 1;
    millis = staticTime;

    sss.innerHTML = millis;

    //if(millis > 999) {
    //    millis = 0;
    //    seconds += 1;
    //}
    //sss.innerHTML = millis;
    ////(millis < 10) ? sss.innerHTML = '0' + millis : sss.innerHTML = millis;
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
var HH = document.createElement('span');
HH.innerHTML = '00';
var mm = document.createElement('span');
mm.innerHTML = '00';
var ss = document.createElement('span');
ss.innerHTML = '00';
var sss = document.createElement('span');
//sss.innerHTML = '000';
var colon = document.createElement('span');
colon.innerHTML = ':';
var colon2 = document.createElement('span');
colon2.innerHTML = ':';
var point = document.createElement('span');
point.innerHTML = '.';
timeText.appendChild(HH);
timeText.appendChild(colon);
timeText.appendChild(mm);
timeText.appendChild(colon2);
timeText.appendChild(ss);
timeText.appendChild(point);
timeText.appendChild(sss);


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
    sss.innerHTML = '000';
    ss.innerHTML = '00';
    mm.innerHTML = '00';
    HH.innerHTML = '00';
    millis = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
});
