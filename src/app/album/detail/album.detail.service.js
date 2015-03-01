angular.module('companydetail.service', [
  'restangular'
])
  .factory('companyDetailService', function (Restangular) {
      return{
        getDetails: function(){
          console.log('detailService');
          return Restangular.all('posts').getList();
        }
      };
  });
