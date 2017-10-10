'use strict';

/**
 * @ngdoc function
 * @name restapicodeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the restapicodeApp
 */
angular.module('restapicodeApp')
  .controller('AboutCtrl', function ($scope, $http) {
    $scope.ayahText = "";
    var url = 'http://quranrest.herokuapp.com/sura/' + $scope.ayahText;

    $scope.keypress = function ($event){
      console.log("=== key down pressed === ", $event);
      if ($event.which == 13 || event.keyCode == 13){
          //location.path('/search/');
          getPost();
      }
    };

    function getPost() {
      url = 'http://quranrest.herokuapp.com/sura/' + $scope.ayahText;      
      $http.get(url).
        then(function(response) {
            console.log(url);
            console.log(response.data);
            $scope.greeting = response.data;
        });
    }
    
    $scope.$watch('ayahText', function(val) {
      console.log("WATCH === key down pressed === ");
      console.log(url);
      var numVal = val.match(/^\d+$/);
      if (numVal) {
          console.log(val);
          url = 'http://quranrest.herokuapp.com/sura/' + $scope.ayahText;
          getPost();
      }
    })
  });
