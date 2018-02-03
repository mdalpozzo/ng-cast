angular.module('video-player')

  .component('app', {
    // TODO
    controller: function($window) {
      this.videoList = window.exampleVideoData;
      this.currentVideo = window.exampleVideoData[0];
      
      this.handleClick = (arg) => {
        this.currentVideo = arg;
      };
    },
    
    templateUrl: 'src/templates/app.html'
  });
