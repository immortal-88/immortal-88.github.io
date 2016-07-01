/**
 * Created by apple on 05.06.16.
 */

require(['model', 'view', 'controller'],

    function (model, view, controller) {
        var firstToDoList = ['Learn AngularJS', 'Learn ReactJS', 'Learn Ruby on Rails'];

        model = new Model(firstToDoList);
        view = new View(model);
        controller = new Controller(view, model);
    }
);