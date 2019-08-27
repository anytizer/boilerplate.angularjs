var myApp = angular.module("myApp", ["ui.router"]);

myApp.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/home");
  
  $stateProvider.state({
    name: "home",
    url: "/home",
    templateUrl: "templates/home.html",
	controller: "HomeController",
  });
  
  $stateProvider.state({
    name: "about",
    url: "/about",
    templateUrl: "templates/about.html",
	controller: "AboutController",
  });

  $stateProvider.state({
    name: "products",
    url: "/products",
    templateUrl: "templates/products.html",
	controller: "ProductsController",
  });
  
  $stateProvider.state({
    name: "login",
    url: "/login",
    templateUrl: "templates/login.html",
	controller: "LoginController",
  });
  
  $stateProvider.state({
    name: "register",
    url: "/register",
    templateUrl: "templates/register.html",
	controller: "RegistrationController",
  });
  
  $stateProvider.state({
    name: "contact",
    url: "/contact",
    templateUrl: "templates/contact.html",
	controller: "ContactController",
  });
  
});

myApp.service("APIService", ["$http", function($http) {
	var api = "/api";
	return {
		"save": function(data){
			return $http({
				method: "POST",
				url: api+"/save",
				data: data
			});
		},
	};
}]);

myApp.controller("HomeController", ["$scope", "$state", "$stateParams", "APIService", function($scope, $state, $stateParams, APIService) {
	$scope.today = new Date();
}]);

myApp.controller("AboutController", ["$scope", "$state", "$stateParams", "APIService", function($scope, $state, $stateParams, APIService) {
	$scope.content = new Date();
}]);

myApp.controller("ProductsController", ["$scope", "$state", "$stateParams", "APIService", function($scope, $state, $stateParams, APIService) {
	$scope.products = [
		{"id": "1", "name": "Downloader"},
		{"id": "2", "name": "Uploader"},
	];
}]);

myApp.controller("RegistrationController", ["$scope", "$state", "$stateParams", "APIService", function($scope, $state, $stateParams, APIService) {
}]);

myApp.controller("LoginController", ["$scope", "$state", "$stateParams", "APIService", function($scope, $state, $stateParams, APIService) {
}]);

myApp.controller("ContactController", ["$scope", "$state", "$stateParams", "APIService", function($scope, $state, $stateParams, APIService) {
	$scope.contact = {
		"company": "XYZ LLC.",
		"address": "Address",
		"phone": "000-000-0000",
		"fax": "000-000-0000",
	};
}]);