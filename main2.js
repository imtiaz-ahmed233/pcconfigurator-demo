var directiveApp = angular.module('directiveApp',[]);

directiveApp.controller('MyCtrl', ['$scope', function($scope) {
  $scope.loadData = function() {
    console.log("Loading Data...");
  }
}]);

directiveApp.directive('loader', function() {
  return {
    restrict: "AE",
    link: function(scope, element, attr) {
      element.bind("mouseenter", function() {
        scope.loadData();
//        scope.$apply("loadData()");
      })
    }
  }
});

directiveApp.directive('eater', function() {
  return {
    scope: {},
    restrict: "AE",
    controller: function($scope) {
      $scope.fruits = [];
      this.addApple = function() {
        $scope.fruits.push("apple");
      };
      this.addPear = function() {
        $scope.fruits.push("pear");
      };
      this.addGrape = function() {
        $scope.fruits.push("grape");
      };
    },
    link: function(scope, element, attrs) {
      element.bind("mouseenter", function() {
        console.log(scope.fruits);
      });
    }
  }
});

directiveApp.directive('apple', function() {
  return {
    require: '^eater',
    link: function(scope, element, attrs, eaterCtrl) {
      eaterCtrl.addApple();
    }
  }
});

directiveApp.directive('pear', function() {
  return {
    require: '^eater',
    link: function(scope, element, attrs, eaterCtrl) {
      eaterCtrl.addPear();
    }
  }
});

directiveApp.directive('grape', function() {
  return {
    require: '^eater',
    link: function(scope, element, attrs, eaterCtrl) {
      eaterCtrl.addGrape();
    }
  }
});
