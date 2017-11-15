app.controller('detailsCtrl', function ($scope, $route, detailsService) {
    $scope.isError = 1;
    var getSearchDetails = function () {
        detailsService.createSearch($route.current.params.id)
            .then(function (response) {
                $scope.searchResult = response.data.results;
                $scope.isError = response.data.results.searchUrls.length ? 1 : 0;
            }, function (err) {
                if (err.status = 404) {
                    $scope.searchResult = '';
                    $scope.isError = 0;
                    console.log("ERROR : ", err.status);
                }
            });
    }
    getSearchDetails();
})