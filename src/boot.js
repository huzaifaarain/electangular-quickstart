window.angular = require('angular');
window.$ = window.jQuery = require('jquery');
window._ = require('underscore');
require('angular-route');
// var mysql = require('mysql');
// var db = mysql.createConnection({
//     host: 'localhost',
//     user: 'user',
//     password: 'password',
//     database: 'db'
// });
// db.connect();
var elApp = angular.module("elApp", ['ngRoute']);
elApp.config(function ($locationProvider, $routeProvider) {

    $locationProvider.hashPrefix('!');
    $locationProvider.html5Mode({ enabled: true, requireBase: false });
    $routeProvider
        .when('/', {
            templateUrl: __dirname + '/home.html',
            controller: 'mainCtrl'
        })
        .when('/about', {
            templateUrl: __dirname + '/aboutus.html',
            controller: 'aboutCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});