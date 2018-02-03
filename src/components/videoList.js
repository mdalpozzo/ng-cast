angular.module('video-player')
  .component('videoList', {
    // TODO
    bindings: {
      videos: '<',
      handleClick: '<'
    }, 
 
    templateUrl: 'src/templates/videoList.html'
  });
