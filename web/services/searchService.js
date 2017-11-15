app.service('searchService', ['$http', function ($http) {
    
    this.createSearch = function (keyword) {
        var url = 'http://localhost:3000/image?search=' + keyword
        console.log("Hittinhg : ", url);
        return $http({
            method: "GET",
            url: url,
            headers: { 'Content-Type': 'application/json' }
        });
    };
}]);
