
app.factory('dataStorage', function ($http) {
    return function ($scope) {

        $http.get('js/data.json').then(function success(res) {
            $scope.data = res.data;
            console.log('We get from data.json next response ', res);
        }, function error(error) {
            console.log(error.status); console.log(error.statusText);
        });

    }
});