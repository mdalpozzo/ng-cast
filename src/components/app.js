angular.module('video-player')

  .component('app', {
 
    controller: function(youTube) {
      this.videoList = null;
      this.currentVideo = null;
      
      this.handleClick = (arg) => {
        this.currentVideo = arg;
      };

      this.handleSearchClick = (query) => {
        var changeThis = (data) => {
          this.videoList = data;
          this.currentVideo = this.videoList[0];
        };
      
        var queryObject = {
          key: window.YOUTUBE_API_KEY,
          q: query,
          max: 20
        };
        youTube.search(queryObject, changeThis);     
      };
      this.init = () => {
        var changeThis = (data) => {
          this.videoList = data;
          this.currentVideo = this.videoList[0];
        };  
        youTube.search({
          key: window.YOUTUBE_API_KEY,
          q: 'dogs',
          max: 20}, changeThis);
      };
      this.init();
    },
    templateUrl: 'src/templates/app.html'
  });
