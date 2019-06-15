app.controller('firstController', function($scope){
	
	$scope.user = []

	$scope.add = function(name){
		if(name == null){
			alert('Enter Name')
		}else{
			$scope.user.push(name);
		}
	}

	$scope.delete = function(name){
		index = $scope.user.indexOf(name)
		$scope.user.splice(index,1)
	}

	$scope.update = function(name){
		data = prompt(name)
		index = $scope.user.indexOf(name)
		console.log("name : ",name);
		console.log("index : ",$scope.user.indexOf(name));
		$scope.user[index] = data;		
	}
});


// app.controller('firstController', function($scope){
	
// 	$scope.user = [{ fName: '',	lName: '' }]

// 	$scope.add = function(fn,ln){
// 		console.log(fn,ln);		
// 		if(fn == null){
// 			alert('Enter First Name')
// 		}else if(ln == null){
// 			alert('Enter Last Name')
// 		}else{
// 			$scope.user.push({fName: fn,lName: ln});
// 		}
// 	}

// 	$scope.delete = function(name){
// 		index = $scope.user.indexOf(name)
// 		$scope.user.splice(index,1)
// 	}

// 	$scope.update = function(name){
// 		data = prompt(name)
// 		index = $scope.user.indexOf(name)
// 		console.log("name : ",name);
// 		console.log("index : ",$scope.user.indexOf(name));
// 		$scope.user[index] = data;		
// 	}
// });


// app.config(function($routeProvider){
// 	$routeProvider
// 	.when('/',{
// 		templateUrl: './demo.html'
// 	})
// 	.when('/first',{
// 		templateUrl: './first.html'
// 	})
// 	.when('/second',{
// 		templateUrl: './second.html'
// 	});
// });