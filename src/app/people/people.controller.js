angular.module('people', [])
  .config(function ($stateProvider) {
    $stateProvider.state('people', {
      url: '/people',
      templateUrl: 'app/people/people.tpl.html',
      controller: 'PeopleCtrl',
      controllerAs: 'people'
    });
  })
  .controller('PeopleCtrl', function ($scope) {
    console.log('iiii');
  });
