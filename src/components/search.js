angular.module('video-player')

  .component('search', {
    bindings: {
      handleSearchClick: '<'
    },
    templateUrl: 'src/templates/search.html'
  });
