angular.module('albumdetail.service', [
  'restangular'
])
  .factory('albumDetailService', function (Restangular) {
      return{
        getDetails: function(){
          console.log('detailService');
          return Restangular.all('posts').getList();
        }
      };
  });
