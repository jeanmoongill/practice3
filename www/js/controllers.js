angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('MainCtrl', function ($scope, $location, $ionicHistory) {
  $scope.login = function (password) {
    console.log("ログインボタン押下");
    console.log("password in MianCtrl: " + password);
    window.localStorage.setItem("password", password);

    $ionicHistory.nextViewOptions({
      disableAnimate: true,
      disableBack:true
    });
    $location.path('/tab/test');
  }
})

.controller('TestCtrl', function ($scope, userService) {

  $scope.users = [];

  userService.getUsers().then(function (users) {
    $scope.users = users;
  });

  $scope.doRefresh = function() {

    userService.getNewUser().then(function(user){

      $scope.users = user.concat($scope.users);

      $scope.$broadcast('scroll.refreshComplete');

    });
  };

})

.controller('UserListCtrl', function ($scope, $stateParams, userService) {

  var index = $stateParams.index;

  $scope.userInfo = userService.getUser(index);

})

.controller('AccountCtrl', function($scope, $location, $ionicHistory, userService) {

  setInterval(function () {
    userService.getChangeRate().then(function (data) {
      $scope.rates = data;
    })
  }, 1000);


  $scope.calc = function (cash) {

    if(cash > 0){
      return cash * 100;
    }else{
      return 0;
    }
  }

});
