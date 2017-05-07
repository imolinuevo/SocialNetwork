function LoginService() {

  var login = {
    email: null,
    password: null
  };

  return login;

}

angular.module('app').service('LoginService', LoginService);
