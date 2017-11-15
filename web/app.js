var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/search", {
        templateUrl : "./views/search.html",
        controller:'searchCtrl'
    })
    .when("/list", {
         templateUrl : "./views/list.html",
        controller:'listCtrl'
    })
     .when("/details/:id", {
        templateUrl : "./views/details.html",
        controller:'detailsCtrl'
    })
    .otherwise({
        template : "<div style='margin-left:38%;margin-top:100px;'><h1>Under Process</h1><p>This page is under process</p></div>",

    });
});