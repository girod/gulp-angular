angular.module('album', ['ui.router', 'albumdetail', 'albumidentity'])
  .config(function($stateProvider){
    $stateProvider.state('album', {
      url: '/album',
      views: {
        '': {templateUrl: 'app/album/album.tpl.html'},
        'infos@album': {
          templateUrl: 'app/album/identity/album.identity.tpl.html',
          controller: 'albumIdentityController'
        },
        'details@album': {
          templateUrl: 'app/album/detail/album.detail.tpl.html',
          controller: 'albumDetailController'
        }
      }
    });
  });
