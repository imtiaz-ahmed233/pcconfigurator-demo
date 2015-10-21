//var mod = angular.module('firstModule', []);
//mod.provider("greeting", function () {
//  this.$get = function () {
//    return function (name) {
//      alert("Hello, " + name);
//    };
//  };
//});
//
//mod.factory("greeting", function () {
//  return function (name) {
//    alert("Hello, " + name);
//  };
//});
//
//mod.value("greeting", function (name) {
//  alert("Hello, " + name);
//});
//
//mod.controller('HelloController', ['$scope', function ($scope) {
//  $scope.greeting = {
//    text: "Hello"
//  }
//}]);


var myApp = angular.module('myApp', []);
myApp.filter('titleCase', function () {
  var titleCaseFilter = function (input) {
    var words = input.split(' ');
    for (var i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
  };
  return titleCaseFilter;
});

myApp.controller('HelloController', ['$scope',
  function HelloController($scope) {
    $scope.greeting = {
      text: "Hello"
    }
  }
]);




myApp.directive('hello', function() {
  return {
    restrict: 'E',
    template: '',
    replace: true,
    transclude: true,
    compile: function() {

    },
    link: function() {

    }
  }
});

myApp.controller('CartController', ['$scope',
   function CartController($scope) {
    $scope.items = [
      {
        title: "Pebbles",
        price: 3.95,
        quantity: 8
            },
      {
        title: "Paint pots",
        price: 12.95,
        quantity: 17
            },
      {
        title: "Prunes",
        price: 6.95,
        quantity: 5
            }
      ];
    $scope.remove = function (index) {
      $scope.items.splice($index, 1);
    }
        }
]);

myApp.controller('StartUpController', ['$scope',
        function StartUpController($scope) {
    $scope.funding = {
      startingEstimate: 0
    };
    $scope.computeNeeded = function () {
      $scope.funding.needed = $scope.funding.startingEstimate * 10;
    }
        }
]);

myApp.controller('StartUpController2', ['$scope',
  function StartUpController2($scope) {
    //      $scope.funding = {startingEstimate: 0};
    $scope.computeNeeded = function () {
      $scope.needed = $scope.funding.startingEstimate * 10;
    };
    //      $scope.$watch('funding.startingEstimate', computeNeeded);
    $scope.requestFunding = function () {
      window.alert("sorry, please get more customers first.");
    };
        }
]);

var students = [{
    name: 'Mary Contrary',
    id: '1'
          },
  {
    name: 'Jack Sprat',
    id: '2'
          },
  {
    name: 'Jill Hill',
    id: '3'
}];

myApp.controller('StudentListController', ['$scope',
  function StudentListController($scope) {
    $scope.students = students;
    $scope.insertTom = function () {
      $scope.students.splice(1, 0, {
        name: 'Tom Thumb',
        id: '4'
      });
    }
        }
]);

myApp.controller('DeathrayMenuController', ['$scope',
  function DeathrayMenuController($scope) {
    $scope.menuState = {
      'show': false
    };
    $scope.toggleMenu = function () {
      $scope.menuState.show = !$scope.menuState.show;
    };
        }
]);

myApp.controller('HeaderController', ['$scope',
  function HeaderController($scope) {

    $scope.isError = false;
    $scope.isWarning = false;
    $scope.showError = function () {
      $scope.messageText = 'This is an error!';
      $scope.isError = true;
      $scope.isWarning = false;
    }
    $scope.showWarning = function () {
      $scope.messageText = 'This is a warning';
      $scope.isWarning = true;
      $scope.isError = false;
    }
  }
]);

myApp.controller('RestaurantTableController', ['$scope',
  function RestaurantTableController($scope) {
    $scope.directory = [{
        name: 'The Handsome Heifer',
        cuisine: 'BBQ'
            },
      {
        name: 'Green\'s Green Greens',
        cuisine: 'Salads'
            },
      {
        name: 'House of Fine Fish',
        cuisine: 'Seafood'
            }];

    $scope.selectRestaurant = function (row) {
      $scope.selectedRow = row;
    }
  }
]);

myApp.controller('CartController2', ['$scope',
  function CartController2($scope) {
    $scope.items = [
      {
        title: "Pebbles",
        price: 3.95,
        quantity: 8
            },
      {
        title: "Paint pots",
        price: 12.95,
        quantity: 17
            },
      {
        title: "Prunes",
        price: 6.95,
        quantity: 5
            }
      ];
    $scope.bill = {};
    $scope.totalCart = function () {
      total = 0;
      for (var i = 0, len = $scope.items.length; i < len; i++) {
        total += $scope.items[i].price * $scope.items[i].quantity;
      }
      return total;
    };
    $scope.subtotal = function () {
      return $scope.totalCart() - $scope.bill.discount;
    };

    function calculateDiscount(newValue, oldValue, scope) {
      $scope.bill.discount = newValue > 100 ? 10 : 0;
    }

    $scope.$watch($scope.totalCart, calculateDiscount);

    //      $scope.remove = function(index) {
    //        $scope.items.splice($index, 1);
    //      }
    }
]);


myApp.controller('HomeController', ['$scope', function ($scope) {
  $scope.pageHeading = 'behold the majesty of your page title';
}]);
