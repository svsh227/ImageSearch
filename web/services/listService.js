app.service('listService', ['$http', function ($http) {
    this.listAllSearch = function () {
        return $http({
            method: "GET",
            url: 'http://localhost:3000/list',
            headers: { 'Content-Type': 'application/json' }
        });
    };
}]);