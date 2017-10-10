'use strict';

/**
 * @ngdoc function
 * @name restapicodeApp.controller:RestapiCtrl
 * @description
 * # RestapiCtrl
 * Controller of the restapicodeApp
 */


angular.module('restapicodeApp')
  .controller('RestapiCtrl', function($scope, $http) {
    $scope.ayahText = "";
    var url = 'https://quranrest.herokuapp.com/word/' + $scope.ayahText;

    $scope.keypress = function ($event){
      console.log("=== key down pressed === ", $event);
      if ($event.which == 13 || event.keyCode == 13){
          //location.path('/search/');
          getPost();
      }
    };

    function getPost() {
      url = 'https://quranrest.herokuapp.com/word/' + $scope.ayahText;      
      $http.get(url).
        then(function(response) {
            console.log(url);
            console.log(response.data);
            $scope.greeting = response.data;
        });
    }
    
    $scope.$watch('ayahText', function(val) {
      console.log("WATCH === key down pressed === ");
      if (val && val.length > 1) {
          console.log(val);
          url = 'https://quranrest.herokuapp.com/word/' + $scope.ayahText;
          getPost();
      }
    })
});

