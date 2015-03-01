angular.module('albumdetail', [
  'ui.router',
  'albumdetail.service'
])
.controller('albumDetailController', function (albumDetailService) {
    console.log('detailController');
    var self = this;
    albumDetailService.getDetails().then(function(details){
      console.log(details);
    });
  });
