function LoginController(UserSession) {

  var login = function () {
    UserSession.set('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJTb2NpYWxOZXR3b3JrIiwiaWF0IjoxNDkzNzQ1NTUwLCJleHAiOjE1MjUyODE1NTAsImF1ZCI6ImxvY2FsaG9zdCIsInN1YiI6IiIsInVpZCI6IjEyMyIsIm5hbWUiOiJleGFtcGxlIiwicm9sZXMiOiJbXCJ1c2VyXCJdIn0.-JM1dj0rxrghfbAkM1egwV9aXYehwG0jG15qqaPLb0c');
  }

  var self = this;
  //Init
  self.session = UserSession;
  //Fn
  self.login = login;
}

angular.module('app').controller('LoginController', LoginController);
