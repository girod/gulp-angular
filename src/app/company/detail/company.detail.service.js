angular.module('companydetail.service', [
  'restangular'
])
  .factory('companyDetailService', function (Restangular) {
      return{
        getDetails: function(){
          console.log('detailService');
          //return Restangular.all('company-details').getList();
          return Restangular.one('company-details', 2).get();
        }
      };
  });
