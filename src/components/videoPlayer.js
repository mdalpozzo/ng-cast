angular.module('video-player')

  .component('videoPlayer', {
    // TODO
    bindings: {
      currentVideo: '<'
    },
    templateUrl: 'src/templates/videoPlayer.html'
  });
