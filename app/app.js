var app = angular.module('main', ['ngRoute']);

 app.directive("fileInput", function($parse){  
      return{  
           link: function($scope, element, attrs){  
                element.on("change", function(event){  
                     var files = event.target.files;  
                     //console.log(files[0].name);  
                     $parse(attrs.fileInput).assign($scope, element[0].files);  
                     $scope.$apply();  
                });  
           }  
      }  
 });  


app.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: './views/home.html',
		controller: 'homeCtrl'
	}).when('/logout', {
		resolve: {
			deadResolve: function($location, user){
				user.clearData();
				$location.path('/login');
			}
		}
	}).when('/login', {
		templateUrl: './views/login.html',
		controller: 'loginCtrl'
	}).when('/register', {
		templateUrl: './views/register.html',
		controller: 'registerCtrl'
	}).when('/recipes', {
		resolve: {
			check: function($location, user){
				if(!user.isUserLoggedIn()){
					$location.path('/login');
				}
			}
		},
		templateUrl: './views/recepies.html',
		controller: 'recipeCtrl'
	}).when('/add-recipes', {
		resolve: {
			check: function($location, user){
				if(!user.isUserLoggedIn()){
					$location.path('/login');
				}
			}
		},
		templateUrl: './views/add-recepies.html',
		controller: 'recipeCtrl'
	}).when('/my-recipes', {
		resolve: {
			check: function($location, user){
				if(!user.isUserLoggedIn()){
					$location.path('/login');
				}
			}
		},
		templateUrl: './views/my-recipes.html',
		controller: 'myRecipeCtrl'
	}).when('/password', {
		resolve: {
			check: function($location, user){
				if(!user.isUserLoggedIn()){
					$location.path('/login');
				}
			}
		},
		templateUrl: './views/password.html',
		controller: 'passwordCtrl'
	}).when('/przepis:recepiId', {
		resolve: {
			check: function($location, user){
				if(!user.isUserLoggedIn()){
					$location.path('/login');
				}
			}
		},
		templateUrl: './views/recipe-view.html',
		controller: 'recipeCtrl'
	}).otherwise({
		templateUrl: './views/404.html',
	})
});