'use strict';

angular
.module('app')
.config(function($stateProvider) {

  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "components/home/home.html",
      controller: 'homeCtrl'
    });

});
