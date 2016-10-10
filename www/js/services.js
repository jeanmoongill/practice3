angular.module('starter.services', [])


.factory('userService', function ($http) {

  var users = [];

  return {
    getUsers: function () {
      return $http.get('https://randomuser.me/api/?results=10').then(function (response) {
        users = response.data.results;
        return response.data.results;
      });
    },

    getUser:function (index) {
      console.log("user is "+users[index]);
      return users[index];
    },


    getChangeRate: function () {
      return $http.get('http://api.fixer.io/latest?symbols=USD, JPY').then(function (response) {
        return response.data;
      });
    }
  }
});
