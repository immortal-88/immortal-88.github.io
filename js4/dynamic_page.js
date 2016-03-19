/**
 * Created by apple on 17.03.16.
 */

// DYNAMICALLY CREATED PAGE


// DYNAMIC PAGE OBJECT

var dynamicPage = {
    heading: document.createElement('h1'),
    tab2: document.createElement('br'),
    submitButton: document.createElement('INPUT'),
    fillCheckbox: function(number) {
        for (var i = 1; i <= number; i++) {
            var checkBox = document.createElement('INPUT');
            checkBox.setAttribute('type', 'checkbox');
            checkBox.setAttribute('id', 'answer' + counter);
            checkBox.setAttribute('value', 'a');
            checkBox.style.marginRight = '20px';
            var answerLabel = document.createElement('label');
            answerLabel.setAttribute('for', 'answer' + counter); // this corresponds to the checkbox id
            answerLabel.style.marginLeft = '50px';
            answerLabel.appendChild(checkBox);
            answerLabel.appendChild(document.createTextNode('Вариант ответа № ' + i));
            var tab = document.createElement('br');
            document.body.appendChild(answerLabel);
            document.body.appendChild(tab);
            counter++;
        }
    },
    question: function (number) {
        for(var i = 1; i <= number; i++) {
            var subHeading = document.createElement('p');
            subHeading.className = 'question';
            subHeading.innerHTML = 'Вопрос № ' + i;
            subHeading.style.margin = '50px 0 0 80px';
            subHeading.style.fontWeight = 'bold';
            subHeading.style.fontSize = '18px';
            document.body.appendChild(subHeading);
            dynamicPage.fillCheckbox(3);
        }
    }
};

// OPERATIONS WITH OBJECT

// Heading
dynamicPage.heading.className = 'box';
dynamicPage.heading.innerHTML = 'Тесты по программированию';
dynamicPage.heading.style.textAlign = 'center';
document.body.appendChild(dynamicPage.heading);

var counter = 1; // counter for checkbox id

// Question generation function
dynamicPage.question(3);

// Submit button
document.body.appendChild(dynamicPage.tab2);
dynamicPage.submitButton.setAttribute('type', 'submit');
dynamicPage.submitButton.setAttribute('id', 'submitButton');
dynamicPage.submitButton.setAttribute('value', 'Проверить мои результаты');
dynamicPage.submitButton.style.padding = '10px';
dynamicPage.submitButton.style.border = '2px solid gray';
dynamicPage.submitButton.style.display = 'block';
dynamicPage.submitButton.style.margin = '20px auto';
dynamicPage.submitButton.style.background = '#81D8D0';
dynamicPage.submitButton.style.color = 'gray';
document.body.appendChild(dynamicPage.submitButton);

