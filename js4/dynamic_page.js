/**
 * Created by apple on 17.03.16.
 */

// DYNAMICALLY CREATED PAGE

var heading = document.createElement('h1');
heading.className = 'box';
heading.innerHTML = 'Тесты по программированию';
heading.style.textAlign = 'center';
document.body.appendChild(heading);

var counter = 1; // counter for checkbox id

// Question generation function
question(3);

//Submit button
var tab2 = document.createElement('br');
document.body.appendChild(tab2);
var submitButton = document.createElement('INPUT');
submitButton.setAttribute('type', 'submit');
submitButton.setAttribute('id', 'submitButton');
submitButton.setAttribute('value', 'Проверить мои результаты');
submitButton.style.padding = '10px';
submitButton.style.border = '2px solid gray';
submitButton.style.display = 'block';
submitButton.style.margin = '20px auto';
submitButton.style.background = '#81D8D0';
submitButton.style.color = 'gray';
document.body.appendChild(submitButton);

//Functions
function fillCheckbox(number) {
    for(var i = 1; i <= number; i++) {
        var checkBox = document.createElement('INPUT');
        checkBox.setAttribute('type', 'checkbox');
        checkBox.setAttribute('id',   'answer' + counter);
        checkBox.setAttribute('value', 'a');
        checkBox.style.marginRight = '20px';
        var answerLabel = document.createElement('label');
        answerLabel.setAttribute('for','answer' + counter); // this corresponds to the checkbox id
        answerLabel.style.marginLeft = '50px';
        answerLabel.appendChild(checkBox);
        answerLabel.appendChild(document.createTextNode('Вариант ответа № ' + i));
        var tab = document.createElement('br');
        document.body.appendChild(answerLabel);
        document.body.appendChild(tab);
        counter++;
    }
}

function question(number) {
    for(var i = 1; i <= number; i++) {
        var subHeading = document.createElement('p');
        subHeading.className = 'question';
        subHeading.innerHTML = 'Вопрос № ' + i;
        subHeading.style.margin = '50px 0 0 80px';
        subHeading.style.fontWeight = 'bold';
        subHeading.style.fontSize = '18px';
        document.body.appendChild(subHeading);
        fillCheckbox(3);
    }
}

var obj = {a: 1};

var increment = function(obj ) { obj.a++ }

increment(obj);

console.log(obj.a);