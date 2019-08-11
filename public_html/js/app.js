var myApp = angular.module("myApp", ["ui.router"]);

myApp.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/home");
  $stateProvider.state({
    name: "home",
    url: "/home",
    templateUrl: "templates/home.html",
  });
  $stateProvider.state({
    name: "about",
    url: "/about",
    templateUrl: "templates/about.html",
  });
  $stateProvider.state({
    name: "login",
    url: "/login",
    templateUrl: "templates/login.html",
  });
});
