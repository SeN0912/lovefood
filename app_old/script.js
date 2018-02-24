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
		controller: 'mainCtrl'
	}).when('/add-recipes', {
		resolve: {
			check: function($location, user){
				if(!user.isUserLoggedIn()){
					$location.path('/login');
				}
			}
		},
		templateUrl: './views/add-recepies.html',
		controller: 'mainCtrl'
	}).when('/my-recipes', {
		resolve: {
			check: function($location, user){
				if(!user.isUserLoggedIn()){
					$location.path('/login');
				}
			}
		},
		templateUrl: './views/my-recipes.html',
		controller: 'mainCtrl'
	}).when('/password', {
		resolve: {
			check: function($location, user){
				if(!user.isUserLoggedIn()){
					$location.path('/login');
				}
			}
		},
		templateUrl: './views/password.html',
		controller: 'mainCtrl'
	}).otherwise({
		template:'404'
	})
});


app.service('user', function(){
	var username;
	var loggedin = false;
	var id;

	this.getName=function() {
		return username;
	};

	this.setId= function (id){
		id=userId;
	};

	this.getId=function() {
		return id;
	};

	this.isUserLoggedIn=function() {
		if(!!localStorage.getItem('login')) {
			loggedin=true;
			var data = JSON.parse(localStorage.getItem('login'));
			username = data.username;
			id = data.id;

		}
		return loggedin;
	};

	this.saveData = function(data){
		username = data.user;
		id = data.id;
		loggedin = true;
		localStorage.setItem('login', JSON.stringify({
			username: username,
			id: id
		}));

	};

	this.clearData = function(){
		localStorage.removeItem('login');
		username="";
		id="";
		loggedin = false;
	};
})

app.controller('homeCtrl', function($scope, $location) {
	$scope.goToLogin = function() {
		$location.path('/login');
	};

	$scope.register = function() {
		$location.path('/register');
	};
});


app.controller('loginCtrl', function($scope, $http, $location, user) {
	$scope.login = function() {
		var username = $scope.username;
		var password = $scope.password;

		$http({
			url: 'login.php',
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			data:'username='+username+'&password='+password
		}).then(function(response) {
			console.log(response.data);
			if(response.data.status == 'loggedin'){
				user.saveData(response.data);
				$location.path('/recipes');
			} else {
				alert('invalid login');
			}
		})

	}
});

app.controller('registerCtrl', function($scope, $http,$location, user) {
	$scope.register = function() {

		var username = $scope.username;
		var password = $scope.password;

		$http({
			url: 'register.php',
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			data:'username='+username+'&password='+password
		}).then(function(response) {
			if(response.data.status == 'register'){
				alert('Success!');
				$location.path('/login');
			} else {
				alert('Dont register user');
			}
		})

	}
});

app.controller('mainCtrl', function($scope, user, $http, $location) {
		$scope.user = user.getName();
		$scope.id = user.getId();

	
	$scope.display = function(){
		$http.get("select.php").then(function(response){
			$scope.recepies=response.data;
			console.log($scope.recepies);
		});
	};


	$scope.displayMyRecepies = function() {
		$scope.user = user.getName();

		$http({
			url: 'myRecipe.php',
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			data:'user='+$scope.user
		}).then(function(response) {
			$scope.myRecepies=response.data;
			console.log($scope.myRecepies);
		})

	}

	$scope.newPass = function() {
		var password = $scope.newPassword;
		$scope.user = user.getName();
		$scope.id = user.getId();

		$http({
			url: 'updatePass.php',
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			data:'newPass='+password+'&id='+$scope.id+'&username='+$scope.user
		}).then(function(response) {
			if(response.data.status == 'done'){
				alert('Password updated!');
			} else {
				alert('Error');
				console.log(response.data);
			}
		})

	}

	$scope.addRecipe = function() {
		 var url = new FormData();  
           angular.forEach($scope.files, function(file){  
                url.append('file', file);  
           });

           $scope.add = function() {
           		$http({
					url: 'addRecipe.php',
					method: 'POST',
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					},
					data:'url='+$scope.url+'&author='+$scope.user+'&recipeName='+$scope.recipeName+'&directions='+$scope.directions+'&time='+$scope.preparationTime
				}).then(function(response) {
					console.log(response.data);
					$location.path('/my-recipes');
				})
           };

           $http({
                url: 'uploadFile.php',
                method: 'POST',
                headers: {
                    'Content-Type':undefined
                },
                data: url
            	}).then(function(response) {
            		$scope.url = response.data;
                	$scope.add();
            	}) 

             
      }  

});

