'use strict';


angular.module('Simplex', [])
    .config(['$routeProvider', '$locationProvider',
            function($routeProvider, $locationProvider){
                $routeProvider
                .when('/', {
                    templateUrl: '/app/partials/landing.html',
                    controller: IndexCtrl
                })
                .otherwise({
                    redirectTo: '/'
                });

                $locationProvider.html5Mode(true);
            }]);


