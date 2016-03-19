'use strict';

angular
.module('app', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

})
.run(function($rootScope){
  $rootScope.bieber = 'bbbbbbeeeeeeiiiibeerrr'
})
