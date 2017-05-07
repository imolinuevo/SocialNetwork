function LoginController(UserSession, LoginService, RegisterService) {

  function login() {
    console.log(LoginService);
  }

  function register() {
    console.log(RegisterService);
  }

  var self = this;
  //Init
  self.session = UserSession;
  self.loginService = LoginService;
  self.registerService = RegisterService;
  //Fn
  self.login = login;
  self.register = register;
}

angular.module('app').controller('LoginController', LoginController);
