var cfg = angular.module('configurator', ['ngRoute']);

cfg.config(function ($routeProvider) {
  $routeProvider
    .when('/step1', {
      controller: 'step1Controller',
      templateUrl: 'step1.html'
    }).when('/step2', {
      controller: 'step2Controller',
      templateUrl: 'step2.html'
    }).when('/step3', {
      controller: 'step3Controller',
      templateUrl: 'step3.html'
    }).otherwise({
      redirectTo: '/'
    });
});

cfg.controller('stepsController', ['$scope', '$location', function ($scope, $location) {
  $scope.go = function (path) {
    $location.path(path);
  };
  $scope.defaultValues = {
    'color': {
      title: 'White',
      price: 200
    },
    'tech': {
      title: 'Intel Z170',
      price: 1741
    },
    'build': {
      'Motherboard': {
        title: 'MSI X99A Raider',
        price: '0'
      },
      'Processors': {
        title: 'Intel Core i7 5820K Hex-Core 3.3GHz (3.5GHz TurboBoost)',
        price: '0'
      },

      'Graphic Cards': {
        title: 'Single 4GB AMD Radeon R9 Nano',
        price: '0'
      },
      'Memory': {
        title: '8GB ORIGIN PC DDR4 Powered by Kingston 2400MHz (2 X 4GB)',
        price: '0'
      },
      'Operating System Drive': {
        title: '500GB ORIGIN PC Approved Hard Drive',
        price: '0'

      },
      'System Cooling': {
        title: 'ORIGIN FROSTBYTE 120 Sealed Liquid Cooling System for 2011 Socket',
        price: '0'
      },
      'Case Lighting': {
        title: 'Remote Controlled Multi-Colored LED',
        price: '0'

      },
      'Warranty': {
        title: '1 Year Part Replacement & 45 Day Shipping',
        price: '0'
      }
    }
  };
  $scope.defaultPrice = 0;
  $scope.selectedValues = $scope.defaultValues;
  $scope.totalPrice = $scope.defaultPrice;

  $scope.calculate = function () {
    $scope.totalPrice = $scope.selectedValues.color.price + $scope.selectedValues.tech.price;
    console.log($scope.selectedValues.build);


    angular.forEach($scope.selectedValues.build, function (value, key, obj) {
      $scope.totalPrice += obj.price;
    });

  };

  //  $scope.selectedValues = (localStorage.getItem('selectedValues')!==null)?JSON.parse($scope.savedConfigs) : $scope.defaultConfigs;
  //  $scope.savedConfigs = localStorage.getItem('selectedValues');
  //  localStorage.setItem('selectedValues', JSON.stringify($scope.selectedValues));
  //
}]);

cfg.controller('step1Controller', ['$scope', function ($scope) {
  $scope.items = [
    {
      title: 'White',
      imgUrl: '',
      price: 200,
      isChosen: false
    },
    {
      title: 'Red',
      imgUrl: '',
      price: 300,
      isChosen: false
    },
    {
      title: 'Green',
      imgUrl: '',
      price: 350,
      isChosen: false
    },
    {
      title: 'Yellow',
      imgUrl: '',
      price: 350,
      isChosen: false
    }
  ];

  //
  //  $scope.submit = function(selected) {
  //
  //    localStorage.setItem('color', JSON.stringify(selected));
  //   go('/step1');
  //  }

  //  $scope.savedStep1 = localStorage.getItem('color');
  //  $scope.color = (localStorage.getItem('color') !== null) ? JSON.parse($scope.savedStep1) : [{}];
}]);

cfg.controller('step2Controller', ['$scope', function ($scope) {


  $scope.items = [
    {
      title: 'Intel Z170',
      imgUrl: '',
      rates: [10, 8, 8, 10, 8],
      details: {
        speed: {
          'Default': '3.4GHz - 4.0GHz',
          'Overclocked': '4.2GHz - 4.8GHz'
        },
        power: '95 Watts',
        cache: {
          'L2 Cache': '4x256KB',
          'L3 Cache': '8MB'
        }
      },
      price: 1741,
      isChosen: false
    },
    {
      title: 'Intel X99',
      imgUrl: '',
      rates: [10, 10, 10, 10, 10],
      details: {
        speed: {
          'Default': '3.0GHz - 3.7GHz',
          'Overclocked': '3.9GHz - 4.5GHz'
        },
        power: '130 Watts',
        cache: {
          'L2 Cache': '4x256KB',
          'L3 Cache': '20MB'
        }
      },
      price: 2038,
      isChosen: false
    },
    {
      title: 'AMD 990FX',
      imgUrl: '',
      rates: [10, 7, 8, 8, 8],
      details: {
        speed: {
          'Default': '4.2GHz',
          'Overclocked': 'By Request'
        },
        power: '125 Watts',
        cache: {
          'L2 Cache': '4x256KB',
          'L3 Cache': '8MB'
        }
      },
      price: 1735,
      isChosen: false
    }
  ];
}]);

cfg.controller('step3Controller', ['$scope', function ($scope) {
  $scope.items = {
    'Motherboard': [{
      title: 'MSI X99A Raider',
      price: '0',
      isChosen: false
    }, {
      title: 'ASUS X99 Deluxe/USB 3.1',
      price: '264',
      isChosen: false
    }, {
      title: 'MSI X99A GODLIKE Gaming',
      price: '339',
      isChosen: false
    }, {
      title: 'ASUS Rampage V Extreme/USB 3.1 ',
      price: '368',
      isChosen: false
    }],
    'Processors': [{
      title: 'Intel Core i7 5820K Hex-Core 3.3GHz (3.5GHz TurboBoost)',
      price: '0',
      isChosen: false
    }, {
      title: 'Intel Core i7 5930K Hex-Core 3.5GHz (3.7GHz TurboBoost)',
      price: '233',
      isChosen: false
    }, {
      title: 'Intel Extreme Core i7 5960X Octa-Core 3.0GHz (3.5GHz TurboBoost)',
      price: '755',
      isChosen: false
    }],
    'Graphic Cards': [{
      title: 'Single 4GB AMD Radeon R9 Nano',
      price: '0',
      isChosen: false
    }, {
      title: 'Single 6GB NVIDIA GTX 980Ti',
      price: '4',
      isChosen: false
    }, {
      title: 'Single 12GB NVIDIA GTX Titan X',
      price: '422',
      isChosen: false
    }, {
      title: 'Single 12GB NVIDIA GTX Titan Z ',
      price: '973',
      isChosen: false
    }, {
      title: 'Dual 4GB NVIDIA GTX 980',
      price: '552',
      isChosen: false
    }, {
      title: 'Dual 12GB NVIDIA GTX Titan X',
      price: '1606',
      isChosen: false
    }],
    'Memory': [{
      title: '8GB ORIGIN PC DDR4 Powered by Kingston 2400MHz (2 X 4GB)',
      price: '0',
      isChosen: false
    }, {
      title: '16GB ORIGIN PC DDR4 Powered by Kingston 2400MHz (4 X 4GB)',
      price: '136',
      isChosen: false
    }, {
      title: '16GB ORIGIN PC DDR4 Powered by Kingston 2666MHz (2 X 8GB)',
      price: '124',
      isChosen: false
    }, {
      title: '32GB ORIGIN PC DDR4 Powered by Kingston 2800MHz (4 X 8GB)',
      price: '459',
      isChosen: false
    }],
    'Operating System Drive': [{
      title: '500GB ORIGIN PC Approved Hard Drive',
      price: '0',
      isChosen: false
    }, {
      title: '1TB Western Digital Caviar Black',
      price: '27',
      isChosen: false
    }, {
      title: '2TB Western Digital Caviar Black ',
      price: '84',
      isChosen: false
    }, {
      title: '4TB Western Digital Caviar Black',
      price: '195',
      isChosen: false
    }, {
      title: '8TB HGST Ultrastar He8 ',
      price: '498',
      isChosen: false
    }],
    'System Cooling': [{
      title: 'ORIGIN FROSTBYTE 120 Sealed Liquid Cooling System for 2011 Socket',
      price: '0',
      isChosen: false
    }, {
      title: 'ORIGIN FROSTBYTE 240 Sealed Liquid Cooling System for 2011 Socket',
      price: '24',
      isChosen: false
    }, {
      title: 'ORIGIN FROSTBYTE 360 Sealed Liquid Cooling System for 2011 Socket',
      price: '52',
      isChosen: false
    }],
    'Case Lighting': [{
      title: 'Remote Controlled Multi-Colored LED',
      price: '0',
      isChosen: false
    }],
    'Warranty': [{
      title: '1 Year Part Replacement & 45 Day Shipping',
      price: '0',
      isChosen: false
    }, {
      title: '2 Year Part Replacement & Free Shipping Warranty',
      price: '169',
      isChosen: false
    }, {
      title: '3 Year Part Replacement & Free Shipping Warranty ',
      price: '269',
      isChosen: false
    }]
  };

  $scope.sizeOf = function (obj) {
    return Object.keys(obj).length;
  };

  $scope.isDone = function () {
    return $scope.sizeOf(configs.build) >= $scope.sizeOf($scope.items) ? true : false;
  };
}]);
