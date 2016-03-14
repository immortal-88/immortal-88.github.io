/**
 * Created by apple on 14.03.16.
 */

var names = ['Влад', 'Сергей', ' Кирилл', 'Виктор', 'Антон'];
var hostName = prompt('Введите имя');

names.forEach(function (element) {
    if(element == hostName) {
        console.log('hostName' + ', добро пожаловать');
    } else {
        console.log('Ошибка')
    }
});

