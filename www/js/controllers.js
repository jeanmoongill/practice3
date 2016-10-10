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
  userService.getUsers().then(function (users) {
    $scope.users = users;
  })
})


.controller('UserListCtrl', function ($scope, $stateParams, userService) {
  var index = $stateParams.index;
  console.log("index is "+ index);
  $scope.userInfo = userService.getUser(index);
  console.log("user info is"+$scope.userInfo);
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


  //
  // userService.getChangeRate().then(function(data){
  //   $scope.rates = data;
  // })

});
