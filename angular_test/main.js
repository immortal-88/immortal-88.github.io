var model = {
    items: [
        {
            firstName: 'Akira',
            lastName: 'Kurosawa',
            country: 'Japan',
            occupation: 'producer'
        }
        ,
        {
            firstName: 'Jimi',
            lastName: 'Hendrix',
            country: 'US',
            occupation: 'singer'
        }
        ,
        {
            firstName: 'Tom',
            lastName: 'Hardy',
            country: 'England',
            occupation: 'actor'
        }
        ,
        {
            firstName: 'David',
            lastName: 'Bowie',
            country: 'England',
            occupation: 'singer'
        }
        ,
        {
            firstName: 'Leonardo',
            lastName: 'DiCaprio',
            country: 'US',
            occupation: 'actor'
        }
        ,
        {
            firstName: 'Michael',
            lastName: 'Bay',
            country: 'US',
            occupation: 'producer'
        }
    ]
};


var tableApp = angular.module('tableApp', ["xeditable"]);

tableApp.controller('tableCtrl', function ($scope) {
    console.log('tableCtrl');
    $scope.list = model;
    console.log($scope.list);

    $scope.propertyName = '';
    $scope.reverse = true;

    $scope.sortBy = function(propertyName) {
        $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
        $scope.propertyName = propertyName;

    };

    //Add item
    $scope.addItem = function(name, lastName, country, occupation) {
        $scope.list.items.push({ firstName: name, lastName: lastName, country: country, occupation: occupation });
    };

    //Delete item
    $scope.removeItem = function($index) {
        $scope.list.items.splice( $index, 1 );
    };
});

