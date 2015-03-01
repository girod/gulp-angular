angular.module('user', [])
  .config(function ($stateProvider) {
    $stateProvider.state('user', {
      url: '/user',
      templateUrl: 'app/user/user.tpl.html',
      controller: 'UserCtrl',
      controllerAs: 'user'
    });
  })
  .controller('UserCtrl', function ($scope) {
    console.log('user controller');
  });
