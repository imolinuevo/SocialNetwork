var app = angular.module("app", ["ui.router", "angular-jwt"]);
app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.hashPrefix("");
    $urlRouterProvider.otherwise("/login");
    $stateProvider
    .state("login", {
      url: "/login",
      controller: "LoginController",
      controllerAs: "self",
      templateUrl: "app/views/controllers/login.html",
      data: {
        authorization: false
      }
    })
    .state("userProtected", {
      url: "/user-protected",
      controller: "UserProtectedController",
      controllerAs: "self",
      templateUrl: "app/views/controllers/user-protected.html",
      data: {
        authorization: true,
        role: "user"
      }
    })
    .state("adminProtected", {
      url: "/admin-protected",
      controller: "AdminProtectedController",
      controllerAs: "self",
      templateUrl: "app/views/controllers/admin-protected.html",
      data: {
        authorization: true,
        role: "admin"
      }
    });
  }
);
app.run(function($rootScope, $state, UserSession) {
  $rootScope.$on("$stateChangeStart", function(event, toState) {
    if(toState.data.authorization && !UserSession.isValid(toState.data.role)) {
      event.preventDefault();
      $state.go("login");
    }
  });
});
