var app = angular.module('app', []);

app.controller('firstCtrl', function($scope, myFactory) {
  console.log('firstCtrl');
  $scope.myFactory = myFactory;
  $scope.hello = 'hello world';
  $scope.myBookmark = function() {
    myFactory.hello = 'Manchester City'
  };
});

app.controller('secondCtrl', function($scope, myFactory) {
  console.log('secondCtrl');
  $scope.myFactory = myFactory;
  $scope.hello = 'hello world';
  $scope.myBookmark1 = function() {
    myFactory.hello = 'Barcelona'
  };
});

app.factory('myFactory', function() {
  return {
    hello: 'hello world'
  };
});
