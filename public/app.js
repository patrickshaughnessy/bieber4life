'use strict';

angular
.module('app', ['ui.router', 'naif.base64'])
.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

})
.run(function($rootScope){
  $rootScope.bieber = 'bbbbbbeeeeeeiiiibeerrr'
})
