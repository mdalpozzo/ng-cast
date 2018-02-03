angular.module('video-player')

  .component('app', {
    // bindings: {
    //   youTube: '<'
    // },
    controller: function($window, youTube) {
      this.videoList = window.exampleVideoData;
      this.currentVideo = window.exampleVideoData[0];
      
      this.handleClick = (arg) => {
        this.currentVideo = arg;
      };

      this.handleSearchClick = (query) => {
        var changeThis = (data) => {
          this.currentVideo = data[0].id.videoId;
          this.videoList = data;
          console.log('i have data', this.videoList);
        };
      
        var queryObject = {
          key: window.YOUTUBE_API_KEY,
          q: query,
          max: 5
        };
        youTube.search(queryObject, changeThis);     
      };
    },
    
    templateUrl: 'src/templates/app.html'
  });
