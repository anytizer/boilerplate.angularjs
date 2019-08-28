var myApp = angular.module("myApp", ["ui.router"]);

myApp.factory("httpRequestInterceptor", function () {
	return {
		request: function (config) {

			config.headers["X-Protection-Token"] = "49E12FA8-C92D-11E9-B654-00360FAA29CD";
			config.headers["Accept"] = "application/json;odata=verbose";

			return config;
		}
	};
});


myApp.config(function ($httpProvider) {
	$httpProvider.interceptors.push("httpRequestInterceptor");
});


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
  });
  
  $stateProvider.state({
    name: "products.list",
    url: "/list",
    templateUrl: "templates/products-list.html",
	controller: "ProductsListController",
  });
  
  $stateProvider.state({
    name: "products.details",
    url: "/details/:id",
    templateUrl: "templates/products-details.html",
	controller: "ProductsDetailsController",
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
	var api = "./api";
	return {
		"products": function(data){
			return $http({
				method: "POST",
				url: api+"/products.php",
				data: data
			});
		},
		"contact": function(data){
			return $http({
				method: "POST",
				url: api+"/contact.php",
				data: data
			});
		},
	};
}]);


myApp.controller("HomeController", ["$scope", "$state", "$stateParams", "APIService", function($scope, $state, $stateParams, APIService) {
	$scope.today = new Date();
}]);


myApp.controller("AboutController", ["$scope", "$state", "$stateParams", "APIService", function($scope, $state, $stateParams, APIService) {
}]);


myApp.controller("ProductsListController", ["$scope", "$state", "$stateParams", "APIService", function($scope, $state, $stateParams, APIService) {
	// @todo Read from API
	$scope.products = [];
	$scope.products_list = function(){
		APIService.products()
		.then(function(response){
			$scope.products = response.data;
		}, function(error){
			alert("Error: "+error);
		});
	};
	
	$scope.products_list();
}]);


myApp.controller("ProductsDetailsController", ["$scope", "$state", "$stateParams", "APIService", function($scope, $state, $stateParams, APIService) {
	//alert("Getting details of: "+$stateParams.id);
	$scope.id = $stateParams.id;
}]);


myApp.controller("RegistrationController", ["$scope", "$state", "$stateParams", "APIService", function($scope, $state, $stateParams, APIService) {
	$scope.registration = {"email": "",};
	$scope.valid = function(){
		return false;
	};
	$scope.register = function(registration){
		alert("Registering..."+registration);
	};
}]);


myApp.controller("LoginController", ["$scope", "$state", "$stateParams", "APIService", function($scope, $state, $stateParams, APIService) {
	$scope.credentials = {"email": "", "password": "",};
	$scope.valid = function(){
		return false;
	};
	$scope.login = function(){
		alert("Logging in...");
	};
}]);


myApp.controller("ContactController", ["$scope", "$state", "$stateParams", "APIService", function($scope, $state, $stateParams, APIService) {
	// @todo Read from API
	$scope.info = {
		"company": "XYZ LLC.",
		"address": "Address",
		"phone": "000-000-0000",
		"fax": "000-000-0000",
	};
	
	$scope.form = {
		"fullname": "",
		"method": "",
		"message": "",
	};
	
	$scope.contact = function(){
		APIService.contact($scope.form).then(function(response){
			alert("Contacted successfully");
			$scope.form = {
				"fullname": "",
				"method": "",
				"message": "",
			};
		}, function(error){
			alert("Error: "+error);
		});
		
		return false;
	};
}]);