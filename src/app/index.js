angular.module('myapp', [
  'ui.router',
  'ngAnimate',
  'ngCookies',
  'ngTouch',
  'ngSanitize',
  'restangular',
  'ui.bootstrap',
  'myapp.config',
  'main',
  'user',
  'album'
])
  .config(function ($urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
  })
  .config(function(RestangularProvider, API_END_POINT) {
    RestangularProvider.setBaseUrl(API_END_POINT);
  })
  .run(function () {
    console.log('run angulars !!!');
  });
