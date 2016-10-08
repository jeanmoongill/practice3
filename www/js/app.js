// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.test', {
    url: '/test',
    views: {
      'tab-test':{
        templateUrl: 'templates/tab-test.html',
        controller: 'TestCtrl'
      }
    }
  })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});


/**************************************************
+	Module:		ionicApp.Main
+	Exports:
+		MainCtrl
**************************************************/
angular.module('ionicApp.Main', ['ionic'])

.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('main', {
      url: "/main",
      templateUrl:"templates/main.html",
      controller:"MainCtrl"
    });
});


/**************************************************
+	Module:		ionicApp.Page2
+	Exports:
+		userService
+		Page2Ctrl
**************************************************/
angular.module('ionicApp.Page2', ['ionic'])

.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('page2', {
      url:"/page2",
      templateUrl: "templates/page2.html",
      controller:"Page2Ctrl"
    })
})

.factory('userService', function($http) {
	return {
		getUsers: function(){
			return $http.get('https://randomuser.me/api/?results=10').then(function(response){
				return response.data.results;
			});
		}
	}
})

.controller("Page2Ctrl",function($scope, userService){
	userService.getUsers().then(function(users){
		$scope.users = users;
	});
});
