angular.module('company', ['ui.router', 'companydetail', 'companyidentity'])
  .config(function($stateProvider){
    $stateProvider.state('company', {
      url: '/company',
      views: {
        '': {templateUrl: 'app/company/company.tpl.html'},
        'infos@company': {
          templateUrl: 'app/company/identity/company.identity.tpl.html',
          controller: 'companyIdentityController'
        },
        'details@company': {
          templateUrl: 'app/company/detail/company.detail.tpl.html',
          controller: 'companyDetailController'
        }
      }
    });
  });
7
