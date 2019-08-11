var myApp2 = angular.module('myApp', ['ui.router']);

myApp2.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/apply");
    $stateProvider
        .state("hello", {
            url: "/hello"
            , templateUrl: "hello.html"
            //, controller: "someController"
        });
    });


var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider) {
  var helloState = {
    name: 'hello',
    url: '/hello',
    templateUrl: "templates/hello.html",
    //template: "<h3>hello world!</h3>"
  };

  var aboutState = {
    name: "about",
    url: "/about",
    templateUrl: "templates/about.html",
    //template: "<h3>Its the UI-Router hello world app!</h3>"
  };

  $stateProvider.state({
    name: 'hello',
    url: '/hello',
    templateUrl: "templates/hello.html",
    //template: "<h3>hello world!</h3>"
  });
  $stateProvider.state({
    name: "about",
    url: "/about",
    templateUrl: "templates/about.html",
    //template: "<h3>Its the UI-Router hello world app!</h3>"
  });
});
