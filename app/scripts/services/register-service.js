function RegisterService() {

  var register = {
    firstName: null,
    lastName: null,
    email: null,
    password: null
  };

  return register;

}

angular.module('app').service('RegisterService', RegisterService);
