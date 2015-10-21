// Code goes here

var app = angular.module('app', []);

app.controller('controller', ['$scope', function ($scope) {
  $scope.aData = {
    'first': {
      'o': 1,
      's': 'test1'
    },
    'second': {
      'o': 2
    }
  };
  $scope.oSelected = {

  };
}]);
