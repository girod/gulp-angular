angular.module('companydetail', [
  'ui.router',
  'companydetail.service'
])
.controller('companyDetailController', function (companyDetailService) {
    console.log('detailController');
    var self = this;
    companyDetailService.getDetails().then(function(details){
      console.log(details);
    });
  });
