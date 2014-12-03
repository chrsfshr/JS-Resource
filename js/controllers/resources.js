app.controller('InstantSearchController', function($scope, $anchorScroll, $location){


	// $scope.jSearch = false;

	$scope.random = (function(){
		return 0.5 - Math.random();
	});
	

	$scope.items = [

		
		
		
		
		
		
		
		
		
		
		
		
		
		
	

		{
			url: 'https://medium.com/@zfxuan/the-wonderful-duo-using-meteor-and-angularjs-together-4d603a4651bf',
			title: 'The Wonderful Duo — Using Meteor and AngularJS Together',
			image: 'images/meteor.png',
			tag: 'angular',
			tag2: 'meteor',
			description: 'For those who don’t know, Meteor is a “full stack” Javascript framework that tries...'
		},
		
		
		
		
		
		
		{
			url: 'https://hackhands.com/building-instagram-clone-angularjs-satellizer-nodejs-mongodb',
			title: 'Build an Instagram clone with Node.js and MongoDB',
			image: 'images/node.png',
			tag: 'node',
			description: 'The motivation to build Satellizer came from my frustration with existing authentic...'
		},
		
		
		
		
		{
			url: 'http://code.tutsplus.com/tutorials/getting-into-ember-js--net-30709',
			title: 'Getting Into Ember.js',
			image: 'images/ember.png',
			tag: 'ember',
			description: 'There are a lot of JavaScript libraries available, and most are really good at prov...'
		},
		
		
		
		
		{
			url: 'https://thinkster.io/a-better-way-to-learn-angularjs/',
			title: 'A Better Way to Learn AngularJS',
			image: 'images/angular.png',
			tag: 'angular',
			description: 'This AngularJS course is built with the intent of exposing you to the best available...'
		}
		
	];

});