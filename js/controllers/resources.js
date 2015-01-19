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
			url: 'https://www.youtube.com/watch?v=i9MHigUZKEM',
			title: 'AngularJS Fundamentals In 60-ish Minutes',
			image: 'images/angular.png',
			tag: 'angular',
			description: 'In this video youll learn how to get started with the AngularJS SPA framework. Fir...'
		},
		{
			url: 'https://teamgaslight.com/blog/the-evolution-of-ember-a-look-at-its-past-present-and-future',
			title: 'The Evolution of Ember: Past, Present and Future',
			image: 'images/ember.png',
			tag: 'ember',
			description: 'For my co-workers and I, it was the heyday of “Ember vs. Angular.” We knew that eac...'
		},
		{
			url: 'http://moduscreate.com/react-native-has-landed/',
			title: 'React Native Has Landed',
			image: 'images/react.png',
			tag: 'react',
			description: 'On January 28th, Facebook announced React Native, a bridge to its React JS framewor...'
		},
		{
			url: 'https://egghead.io/technologies/angularjs',
			title: 'AngularJS Lessons',
			image: 'images/angular.png',
			tag: 'angular',
			description: 'AngularJS is an open-source JavaScript framework, maintained by Google, that assist...'
		},
		{
			url: 'https://nodesource.com/blog/node-desktop-applications',
			title: 'The State of Desktop Applications in Node.js',
			image: 'images/node.png',
			tag: 'node',
			description: 'Though Node.js is known for being a server-side platform, interest in using it for ...'
		},
		{
			url: 'https://thinkster.io/a-better-way-to-learn-angularjs/services',
			title: 'Using Services to Share Data Between Controllers',
			image: 'images/angular.png',
			tag: 'angular',
			description: 'Services provide an easy way for us to share data and functionality throughout our app...'
		},
		{
			url: 'http://www.sitepoint.com/practical-guide-angularjs-directives/',
			title: 'A Practical Guide to AngularJS Directives',
			image: 'images/angular.png',
			tag: 'angular',
			description: 'Directives are the most important components of any AngularJS application. Although...'
		},
		{
			url: 'http://teamtreehouse.com/library/emberjs',
			title: 'Treehouse EmberJS Course',
			image: 'images/ember.png',
			tag: 'ember',
			description: 'As web applications gain increasingly rich and complex user interfaces, a new breed...'
		},
		
		
		{
			url: 'https://vickev.com/#!/article/authentication-in-single-page-applications-node-js-passportjs-angularjs',
			title: 'Authentication in Single Page Applications',
			image: 'images/angular.png',
			tag: 'angular',
			tag2: 'node',
			description: 'In this article, we will see how to create URLs secured by a login and a password...'
		},
		{
			url: 'https://www.airpair.com/angularjs/posts/angularjs-performance-large-applications',
			title: 'AngularJS Performance in Large Applications',
			image: 'images/angular.png',
			tag: 'angular',
			description: 'Whether you are writing an Angular front end for an old application with large use...'
		},{
			url: 'http://www.ng-newsletter.com/posts/validations.html',
			title: 'Form validation with AngularJS',
			image: 'images/angular.png',
			tag: 'angular',
			description: 'Client-side form validations are one of the coolest features inside of AngularJS...'
		},
		{
			url: 'http://thejackalofjavascript.com/getting-started-with-angular-2-0/',
			title: 'Getting Started with Angular 2.0',
			image: 'images/angular.png',
			tag: 'angular',
			description: 'Recently Angularjs team has launched a 5 mins quick start tutorial on getting started...'
		},
		{
			url: 'http://swirlycheetah.com/try-angular2-today/',
			title: 'Try Angular2 Today',
			image: 'images/angular.png',
			tag: 'angular',
			description: 'If you want to investigate what Angular2 is offering there are numerous projects and...'
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
			url: 'http://angularjs.meteor.com/',
			title: 'Angular-Meteor',
			image: 'images/meteor.png',
			tag: 'meteor',
			tag2: 'angular',
			description: 'ngular-Meteor brings the responsive power of Angular to the powerful and flexible M...'
		},
		{
			url: 'https://teamgaslight.com/blog/3-solutions-for-using-meteor-and-angularjs-together',
			title: '3 Solutions for Using Meteor and AngularJS Together',
			image: 'images/meteor.png',
			tag: 'meteor',
			tag2: 'angular',
			description: 'Building rich client web apps has gotten a ton better in the past 5 years. Framewo...'
		},
		{
			url: 'http://joshowens.me/meteor-and-angular-a-match-made-in-heaven/',
			title: 'METEOR AND ANGULAR - A MATCH MADE IN HEAVEN?',
			image: 'images/meteor.png',
			tag: 'meteor',
			tag2: 'angular',
			description: 'Ive only had one occasion to really try out Angular to see what I thought of it, I...'
		},
		{
			url: 'http://www.sitepoint.com/beginners-guide-mobile-development-meteor/',
			title: 'A Beginners Guide to Mobile Development with Meteor',
			image: 'images/meteor.png',
			tag: 'meteor',
			description: 'If you’re a web developer who wants to release their work on iOS and Android (which...'
		},
		{
			url: 'http://meteoric.github.io/',
			title: 'Meteor + Ionic',
			image: 'images/meteor.png',
			tag: 'meteor',
			description: 'Build Meteor apps with Ionic Framework…No Angular required just use Meteors Blaze t...'
		},
		{
			url: 'http://www.sitepoint.com/9-ways-meteor-1-0-will-take-world/',
			title: '9 Ways Meteor 1.0 Will Take You Out of This World',
			image: 'images/meteor.png',
			tag: 'meteor',
			description: 'For 1.0, the Meteor Development Group launched a brand new website complete with sl...'
		},
		
		{
			url: 'http://www.smashingmagazine.com/2015/02/26/build-your-own-product-hunt-with-telescope-and-meteor/',
			title: 'Build Your Own Product Hunt With Telescope And Meteor',
			image: 'images/meteor.png',
			tag: 'meteor',
			description: 'Product Hunt wasn’t the only success story of 2014. Another one was certainly Meteo...'
		},
		{
			url: 'http://tutorialzine.com/2013/08/learn-angularjs-5-examples/',
			title: 'Learn AngularJS With These 5 Practical Examples',
			image: 'images/angular.png',
			tag: 'angular',
			description: 'You will find the basic building blocks of Angular apps - Models, Views, Controllers...'
		},
		{
			url: 'http://joshowens.me/getting-started-with-meteor-js/',
			title: 'GETTING STARTED WITH METEOR.JS',
			image: 'images/meteor.png',
			tag: 'meteor',
			description: 'What does an aspiring web developer need to know to develop a Meteor app? Below is ...'
		},
		{
			url: 'https://www.youtube.com/watch?v=7iqdkVwtuvg',
			title: 'Building a Meteor.js mobile app',
			image: 'images/meteor.png',
			tag: 'meteor',
			description: 'Join Josh Owens as he builds a Meteor.js app from scratch using Ratchet, Cordova, a...'
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
			url: 'https://www.npmjs.com/',
			title: 'NPM for NodeJS',
			image: 'images/node.png',
			tag: 'node',
			description: 'Npm is the package manager for javascript and will be used in every Node app you wi...'
		},
		{
			url: 'http://www.wenincode.com/installing-node-jsnpm-without-sudo/',
			title: 'Installing Node.js/NPM Without Sudo',
			image: 'images/node.png',
			tag: 'node',
			description: 'Node JS / NPM have become essential parts of many applications. Because of this, an...'
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
			url: 'https://scotch.io/tutorials/build-a-real-time-twitter-stream-with-node-and-react-js',
			title: 'Build A Real-Time Twitter Stream with Node and React.js',
			image: 'images/node.png',
			tag: 'node',
			tag2: 'react',
			description: 'Welcome to the second installation of Learning React, a series of articles focused ...'
		},
		{
			url: 'https://robots.thoughtbot.com/ember-is-for-designers',
			title: 'Ember is for Designers',
			image: 'images/ember.png',
			tag: 'ember',
			description: 'Though I’ve been working with Rails for years, I started my first Ember.js client p...'
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
			url: 'http://www.embercasts.com/episodes/client-side-authentication-part-1',
			title: 'Client-side Authentication Part 1',
			image: 'images/ember.png',
			tag: 'ember',
			description: 'This two-part series on client-side authentication focuses on how you can configure...'
		},
		{
			url: 'http://www.toptal.com/angular-js/a-step-by-step-guide-to-your-first-angularjs-app',
			title: 'A Step-by-Step Guide to Your First AngularJS App',
			image: 'images/angular.png',
			tag: 'angular',
			description: 'AngularJS is a JavaScript MVC framework developed by Google that lets you build well...'
		},
		{
			url: 'http://www.embercasts.com/episodes/getting-started-with-ember-model',
			title: 'Getting Started with Ember Model',
			image: 'images/ember.png',
			tag: 'ember',
			description: 'In this Embercast we cover getting started with Ember Model and the Ember starter kit.'
		},
		{
			url: 'http://embersherpa.com/cheatsheet/',
			title: 'Ember.js Cheatsheet',
			image: 'images/ember.png',
			tag: 'ember',
			description: 'Ember.js cheatsheet and development companion for use when building SPA a good refo...'
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