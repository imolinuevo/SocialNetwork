var app = angular.module("app", ["ui.router"]);
app.config(
  ["$stateProvider", "$urlRouterProvider", "$locationProvider",
  function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $urlRouterProvider.otherwise('/login');
    $stateProvider
    .state('login', {
      url: "/login",
      controller: 'LoginController',
      controllerAs: 'self',
      templateUrl: 'app/views/controllers/login.html',
      data: {
        authorization: false
      }
    });
  }
]);
