'use strict';

angular
.module('app')
.config(function($stateProvider) {

  $stateProvider
    .state('photos', {
      abstract: true,
      url: "/photos",
      template: "<bl-navbar></bl-navbar><ui-view />",
      controller: "photosCtrl"
    })
    .state('photos.list', {
      url: "", // /photos
      templateUrl: "components/photos/list/list.html"
    })
    .state('photos.detail', {
      url: "/detail", // /photos/detail
      templateUrl: "components/photos/detail/detail.html"
    })
    .state('photos.new', {
      url: "/new", // /photos/new
      templateUrl: "components/photos/new/new.html"
    })

});
