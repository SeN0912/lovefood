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