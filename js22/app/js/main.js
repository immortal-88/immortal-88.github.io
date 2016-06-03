/**
 * Created by apple on 20.05.16.
 */

// Директива use strict;
"use strict";

// Создаем объект
let data = {
    title: {
        value: "Тест по Второй мировой войне"
    },
    list_question: [
        {
            question: "Когда началась Вторая мировая война",
            options: [
                "1940",
                "1941",
                "1939"
            ],
            answer: "1939"
        },
        {
            question: "Какая битва повлияла на исход всей Второй мировой войны?",
            options: [
                "Битва в Арденском лесу",
                "Сталинградская битва",
                "Битва у Аль-Аламейна"
            ],
            answer: "Сталинградская битва"
        },
        {
            question: "Кто возглавлял Африканскую компанию со стороны Германии?",
            options: [
                "Гудериан",
                "Роммель",
                "Кох"
            ],
            answer: "Роммель"
        }
    ]
};

// L O C A L S T O R A G E   O P E R A T I O N S

// Записываем объект в localStorage
localStorage.setItem('test', JSON.stringify(data));
console.log(localStorage.getItem('test'));

// Берем объект из localStorage
let returnData = JSON.parse(localStorage.getItem('test'));
console.log(returnData);


// R E N D E R I N G   W I T H   L O D A S H

// Рендеринг с помощью LoDash шаблонизатора
$(function () {
    let html = _.template($('#testId').html());

    let content = html(returnData);
    $('body').append(content);

    // OnClick operation
    rightAnswersArrFill();
    $('.check').click(function () {
        console.log('rightAnswers', rightAnswersArr);
        if (_.difference(answersArr, rightAnswersArr) == 0) {
            alert('Вы ответили правильно');
        } else {
            alert('Вы ответили неправильно');
        }

        radioReset();
    })
});


// L O G I C S   W I T H   D A T A

// Берем данные из радиобаттонов
let answersArr = [];
answersArr.fillArray = (event) => {
    let target = event.target;

    if (target.getAttribute('data-go')) {

        let labelValue = target.getAttribute('data-label');
        let number = target.getAttribute('data-num');
        answersArr[number] = labelValue;
        console.log('answersArr', answersArr);
    }
};

// Создаем массив правильных ответов
let rightAnswersArr = [];
let rightAnswersArrFill = () => {
    for (let i = 0; i < 3; i++) {
        rightAnswersArr.push(data.list_question[i].answer);
    }
    return rightAnswersArr;
};

// Обнуление радиобаттонов
let radioReset = () => {
    $('input[type="radio"]').prop('checked', false);
};
