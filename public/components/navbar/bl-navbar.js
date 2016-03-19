'use strict';

angular.module('app')
.directive('blNavbar', function(){

  function link(scope, elem, attrs){
    console.log('navbar')
  }

  return {
    restrict: 'AE',
    templateUrl: './components/navbar/bl-navbar.html',
    scope: {},
    link: link
  }
})
