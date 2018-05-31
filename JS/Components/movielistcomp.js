"use strict";

const movieList = {
  bindings: {
    response: "<"
  },

  template:`
  <section>
  <div ng-repeat="item in $ctrl.response">
    <img ng-click="$ctrl.movieInfo();" ng-src="https://image.tmdb.org/t/p/w300{{item.poster_path}}"/>
    <div>
    <p>{{item.title}}</p>
    <p>{{item.vote_average}}</p>
      <p>{{item.overview}}</p>
    
    </div>
  </div>
  </section>
  `,
  controller: ["MovieService", function(MovieService) {
    const vm = this;
    vm.movieInfo = () => {
      MovieService.movieInfo();
    };
  

  }]
}


angular
  .module("app")
  .component("movieList", movieList);