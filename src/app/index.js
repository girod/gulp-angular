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
  'people',
  'company'
])
  .config(function ($urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
  })
/*
  .config(function(RestangularProvider, API_END_POINT) {

    RestangularProvider.setBaseUrl(API_END_POINT);
    RestangularProvider.addResponseInterceptor(function(data, operation, what) {
        var extractedData = data;
        if (operation == 'getList') {
          extractedData = data._embedded[what] || [];
          extractedData.meta = {
            _links: data._links || {},
            page_count: data.page_count || 0,
            page_size: data.page_size || 0,
            total_items: data.total_items || 0
          };
        }

        return extractedData;
    });
  })
*/
  .run(function () {
    console.log('run angulars !!!');
  });
