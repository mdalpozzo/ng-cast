angular.module('video-player')
  .service('youTube', function($http) {
    this.search = function(params, callback) {
      $http({
        method: 'GET',
        url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${params.max}&q=${params.q}&key=${params.key}`
      }).then(function(youtubeData) {
        callback(youtubeData.data.items);
      }).catch(function(youtubeData) {
        console.log('error', youtubeData);
      });
    };
  });
