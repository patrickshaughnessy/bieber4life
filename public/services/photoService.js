'use strict';

angular.module('app')
.factory('photoService', function($http, $q){

  function create(photo){

    var deferred = $q.defer();

    $http.post('/photos', photo)
    .then(function(data){
      console.log('done posting photo', data);
      deferred.resolve(data);
    })
    .catch(function(err){
      console.log(err);
      deferred.reject(err);
    });

    return deferred.promise;

  }


  return {
    create: create
  }

})
