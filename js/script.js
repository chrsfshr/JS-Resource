var app = angular.module("instantSearch", ['ngRoute']);

    app.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'views/home.html',
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'views/about.html',
            })

            // anything else
            .otherwise({
            	redirectTo: '/'
            });
    });

// Create the instant search filter

app.filter('searchFor', function(){


	return function(arr, searchString){

		if(!searchString){
			return arr;
		}

		var result = [];

		searchString = searchString.toLowerCase();

		angular.forEach(arr, function(item){

			if(item.title.toLowerCase().indexOf(searchString) !== -1){
				result.push(item);
			}

		});

		return result;
	};

});







