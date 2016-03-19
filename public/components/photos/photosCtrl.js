'use strict';

angular.module('app')
.controller('photosCtrl', function($scope, photoService){
  $scope.addPhoto = function(photo){
    photo.file = photo.file ? photo.file.base64 : '';
    photoService.create(photo).then(function(data){
      console.log('photo saved, back in photoCtrl', data);
    })
  }
})
