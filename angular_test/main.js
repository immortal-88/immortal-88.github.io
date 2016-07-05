
// M O D E L
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

// С O N T R O L L E R
var tableApp = angular.module('tableApp', ['xeditable', 'ng-sortable']);

tableApp.controller('tableCtrl', function ($scope) {
    console.log('tableCtrl');
    $scope.list = model;
    console.log($scope.list);

    $scope.propertyName = null;
    $scope.reverse = true;
    $scope.reverse = false;

    $scope.sortBy = function(propertyName) {
        $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
        $scope.propertyName = propertyName;

    };

    //Add item
    $scope.addItem = function(name, lastName, country, occupation) {
        $scope.list.items.push({ firstName: name, lastName: lastName, country: country, occupation: occupation });
        $scope.name = '';
        $scope.lastName = '';
        $scope.country = '';
        $scope.occupation = '';
    };

    //Delete item
    $scope.removeItem = function(item) {
        var index = $scope.list.items.indexOf(item);
        if (index != -1) {
            $scope.list.items.splice(index, 1);
        }
    };

});

