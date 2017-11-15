app.controller('searchCtrl', function ($scope, searchService) {
    $scope.ctrlName = 'Search Page updated'
    $scope.searchText = '';
    $scope.searchResultFor = '';
    $scope.searchResult = '';
    $scope.isError = 1;
    $scope.searchImage = function () {
        $scope.searchResultFor = $scope.searchText;
        searchService.createSearch($scope.searchText.split(' ').join('_'))
            .then(function (response) {
                $scope.searchResult = response.data.searchUrls;
                $scope.isError = response.data.searchUrls.length > 0 ? 1 : 0;
            }, function (err) {
                if (err.status = 404) {
                    $scope.searchResult = '';
                    $scope.isError = 0;
                    console.log("ERROR : ", err.status);
                }
            });
    }

})