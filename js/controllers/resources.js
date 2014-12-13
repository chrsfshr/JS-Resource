app.controller('InstantSearchController', function($scope, $anchorScroll, $location){


	// $scope.jSearch = false;

	$scope.random = (function(){
		return 0.5 - Math.random();
	});
	

	$scope.items = [

		
		
		
		
		
		
		
		
		
		{
			url: 'http://www.meteorinaction.com/',
			title: 'Meteor in Action',
			image: 'images/meteor.png',
			tag: 'meteor',
			description: 'Learn fullstack reactivity. Meteor brings the fun back to developing web applicatio...'
		},
		
		
		
		
		
		{
			url: 'http://www.ng-newsletter.com/posts/validations.html',
			title: 'Form validation with AngularJS',
			image: 'images/angular.png',
			tag: 'angular',
			description: 'Client-side form validations are one of the coolest features inside of AngularJS...'
		},
		
		
		{
			url: 'https://medium.com/@lelylan/building-your-first-app-for-the-internet-of-things-in-15-minutes-c0e1825484f8',
			title: 'First App for the Internet of Things in 15 minutes',
			image: 'images/angular.png',
			tag: 'angular',
			description: 'The presentation was based on a live code session showing how to create a web app...'
		},

		{
			url: 'https://medium.com/@zfxuan/the-wonderful-duo-using-meteor-and-angularjs-together-4d603a4651bf',
			title: 'The Wonderful Duo — Using Meteor and AngularJS Together',
			image: 'images/meteor.png',
			tag: 'angular',
			tag2: 'meteor',
			description: 'For those who don’t know, Meteor is a “full stack” Javascript framework that tries...'
		},
		
		{
			url: 'http://themeteorchef.com/recipes/building-a-saas-with-meteor-stripe-part-2/',
			title: 'Building a SaaS with Meteor: Stripe (Part 2)',
			image: 'images/meteor.png',
			tag: 'meteor',
			description: 'In part two of our Stripe recipe we will learn how to make it possible for our cust...'
		},
		
		
		
		
		
		{
			url: 'http://angular-ui.github.io/angular-google-maps/#!/',
			title: 'Angular Google Maps',
			image: 'images/angular.png',
			tag: 'angular',
			description: 'Angular Google Maps is a set of directives (part of angular-ui) written in CoffeeSc...'
		},
		{
			url: 'https://hackhands.com/building-instagram-clone-angularjs-satellizer-nodejs-mongodb',
			title: 'Build an Instagram clone with Node.js and MongoDB',
			image: 'images/node.png',
			tag: 'node',
			description: 'The motivation to build Satellizer came from my frustration with existing authentic...'
		},
		
		
		{
			url: 'http://tutorialzine.com/2014/09/creating-your-first-node-js-command-line-application/',
			title: 'Creating Your First Node.js Command-line Application',
			image: 'images/node.png',
			tag: 'node',
			description: 'Command-line utilities are a must for every seasoned web developer. Node.js makes d...'
		},
		{
			url: 'http://jilles.me/express-routing-the-beginners-guide/',
			title: 'Express Routing - The Beginners Guide',
			image: 'images/node.png',
			tag: 'node',
			description: 'Getting started with Express is not the easiest thing to do, if you have read my pr...'
		},
		{
			url: 'http://scottksmith.com/blog/2014/10/05/twitatron-building-a-production-web-app-with-node/?utm_campaign=Front_End_Dev_Weekly_27&utm_medium=email&utm_source=Front+End+Dev+Weekly',
			title: 'Building a Production Web App With Node',
			image: 'images/node.png',
			tag: 'node',
			description: 'While writing the Beer Locker tutorials many readers commented on how helpful it wa...'
		},
		
		
		{
			url: 'http://angular-js.in/',
			title: 'Angular Directives',
			image: 'images/angular.png',
			tag: 'angular',
			description: 'A curated list of Angular directives to use in your Anuglar app. Directives are used...'
		},
		
		
		{
			url: 'http://builtwithember.io/',
			title: 'Built with Ember',
			image: 'images/ember.png',
			tag: 'ember',
			description: 'Ambitious web applications built using Ember.js. Brought to you by Blimp and other ...'
		},
		{
			url: 'https://speakerdeck.com/lukemelia/introduction-to-ember-dot-js',
			title: 'Intro to EmberJS',
			image: 'images/ember.png',
			tag: 'ember',
			description: 'This talk was delivered to the Ember.js NYC Meetup on Thursday, March 28th, 2013. V...'
		},
		{
			url: 'http://code.tutsplus.com/tutorials/getting-into-ember-js--net-30709',
			title: 'Getting Into Ember.js',
			image: 'images/ember.png',
			tag: 'ember',
			description: 'There are a lot of JavaScript libraries available, and most are really good at prov...'
		},
		
		
		{
			url: 'http://www.embercasts.com/episodes/getting-started-with-ember-model',
			title: 'Getting Started with Ember Model',
			image: 'images/ember.png',
			tag: 'ember',
			description: 'In this Embercast we cover getting started with Ember Model and the Ember starter kit.'
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