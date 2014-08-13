'use strict';


angular.module('Simplex', ['ngRoute'])
    .config(['$routeProvider', '$locationProvider',
            function($routeProvider, $locationProvider){
                $routeProvider
                .when('/simplex', {
                    templateUrl: '/simplex/app/partials/landing.html',
                    controller: IndexCtrl
                })
                .otherwise({
                    redirectTo: '/simplex'
                });

                $locationProvider.html5Mode(true);
            }]);


