app.service('detailsService', ['$http', function ($http) {
    this.createSearch = function (id) {
        return $http({
            method: "GET",
            url: 'http://localhost:3000/search/'+id,
            headers: { 'Content-Type': 'application/json' }
        });
    };
}]);