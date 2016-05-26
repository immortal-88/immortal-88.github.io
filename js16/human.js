/**
 * Created by apple on 25.05.16.
 */

function Human() {
    this.name = 'Victor';
    this.age = 59;
    this.sex = 'male';
    this.height = 180;
    this.weight = 80;
}

function Worker() {
    this.workplace = 'Google';
    this.salary = '5000';
    this.work = function() {
        console.log('I work in Google');
    }
}

function Student() {
    this.university = 'MIT';
    this.scholarship = '400';
    this.watchTVShows = function() {
        console.log('I watch Game of Thrones');
    }
}


var human1 = new Human();
console.log('1) human', human1.name, human1.age, human1.sex, human1.height, human1.weight);

var worker = new Worker();
worker.__proto__ = new Human();
console.log('2) worker', worker.name, worker.age, worker.workplace, worker.salary);
worker.work();

var student =  new Student();
student.__proto__ = new Human();
console.log('3) student', student.name, student.sex, student.university, student.scholarship);
student.watchTVShows();
