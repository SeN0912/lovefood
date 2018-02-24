
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
		$scope.submitted=true;
		if ($scope.loginForm.$invalid) return;
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
			if(response.data.status == 'loggedin'){
				user.saveData(response.data);
				$location.path('/recipes');
			} else {
				alert('Błędne dane lub brak połączenia z bazą danych!');
			}
		})

	}
});

app.controller('registerCtrl', function($scope, $http,$location, user) {
	$scope.register = function() {
		$scope.submitted=true;
		if ($scope.registerForm.$invalid) return;

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

app.controller('passwordCtrl', function($scope, $http, user) {
	$scope.user = user.getName();
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
			}
		})

	}
});

app.controller('recipeCtrl', function($scope, user, $http, $location, $routeParams, $window) {
		$scope.user = user.getName();
		$scope.id = user.getId();
		

	
	$scope.display = function(){
		$http.get("select.php").then(function(response){
			$scope.recepies=response.data;
		});
	};

	$scope.selectIngredient = function(){
		$http.get("selectIngredient.php").then(function(response){
			$scope.ingredients=response.data;
		});

		$http.get("selectUnit.php").then(function(response){
			$scope.units=response.data;
		});
	};



	$scope.addIngredient = function() {
		if (!$scope.ingredientsArray) {
			$scope.ingredientsArray = [];
		}
		var ingredient = [];
		ingredient.ingredient_name = $scope.ingredient_name;
		ingredient.unit_name = $scope.unit_name;
		ingredient.quantity = $scope.quantity;
		$scope.ingredientsArray.push(ingredient);
		$scope.ingredient_name = null;
		$scope.unit_name = null;
		$scope.quantity = null;
		$scope.ingredientsArray;
	};

	$scope.ingreadientAdd = function() {
           angular.forEach($scope.ingredientsArray, function (value) {
                $scope.ingredient_name=value.ingredient_name;
                $scope.quantity=value.quantity;
                $scope.unit_name=value.unit_name;
                $http({
					url: 'addIngredient.php',
					method: 'POST',
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					},
					data:'ingredient_name='+$scope.ingredient_name+'&quantity='+$scope.quantity+'&unit_name='+$scope.unit_name+'&recipe_name='+$scope.recipe_name
				}).then(function(response) {
                	var ingredient = [];
				})
          });

	};

	$scope.displayRecipe = function() {
		$scope.portions = 1;
		$scope.recipeid = $routeParams.recepiId,
		$http({
			url: 'recepiView.php',
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			data:'id='+$scope.recipeid
		}).then(function(response){
			$scope.selectedRecepi=response.data;
			$scope.ingreadientView();
			
		})
		$scope.ingreadientView = function() {
			$scope.recipe_name = $scope.selectedRecepi[0].recipe_name;
			
			$http({
			url: 'ingreadientView.php',
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
				data:'recipe_name='+$scope.recipe_name
			}).then(function(response){
				$scope.selectedIngreadients=response.data;
			})
		}
		

		$scope.calc = function() {
			$scope.portion = $scope.selectedRecepi[0].portion;
			$scope.portions = $scope.newPortion / $scope.portion;
		}


	};

	

	$scope.print = function(el) {
	      var restorepage = document.body.innerHTML;
	      var printcontent = document.getElementById(el).innerHTML;
	      document.body.innerHTML = printcontent;
	      window.print();
	      document.body.innerHTML = restorepage;
	      document.location.reload();
	}
	

	$scope.addRecipe = function() {
		 var url = new FormData();  
           angular.forEach($scope.files, function(file){  
                url.append('file', file);  
           });

           if ($scope.preparationTime<30) {
           	$scope.classname='bg-success';
           } else if ($scope.preparationTime>30 & $scope.preparationTime<60) {
           	$scope.classname='bg-warning';
           } else {
           	$scope.classname='bg-danger';
           }
           
           

           $scope.add = function() {
           		$scope.submitted=true;
				if ($scope.recipeForm.$invalid) return; 
				if (!$scope.ingredientsArray) return;


           		$http({
					url: 'addRecipe.php',
					method: 'POST',
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					},
					data:'url='+$scope.url+'&author='+$scope.user+'&recipe_name='+$scope.recipe_name+'&description='+$scope.description+'&time='+$scope.preparationTime+'&portion='+$scope.portion+'&classname='+$scope.classname
				}).then(function(response) {
					$scope.ingreadientAdd();
					if ($window.confirm("Dodano przepis!")) {
						$location.path('/my-recipes');
					}
					
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

app.controller('myRecipeCtrl', function($scope, $http, user, $window) {
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
		})

	}

	$scope.deleteRecipe = function(recipe_name) {
		$scope.recipe_name=recipe_name;
		if ($window.confirm("Czy na pewno chcesz usunąć ten przepis?")) {
			$http({
				url: 'deleteRecipe.php',
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				data:'recipe_name='+$scope.recipe_name
			}).then(function(response){
				$scope.deleteIngreadients();
			});

			$scope.deleteIngreadients = function() {
				$http({
				url: 'deleteIngreadients.php',
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				data:'recipe_name='+$scope.recipe_name
			}).then(function(response){
				$scope.displayMyRecepies();
			});
			document.location.reload();
			}
		}
      }
});
