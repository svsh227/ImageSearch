app.controller('listCtrl', function ($scope, listService) {
    $scope.isResult = 1;
    var listAllImages = function () {
        listService.listAllSearch()
            .then(function (response) {
                $scope.searchResult = response.data.results;
            }, function (err) {
                if (err.status = 404) {
                    $scope.searchResult = '';
                    $scope.isResult = 0;
                    console.log("ERROR : ", err.status);
                }
            });
    }
    listAllImages();
})