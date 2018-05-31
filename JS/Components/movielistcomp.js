"use strict";

const movieList = {
  bindings: {
    response: "<",
  },

  template:`

  <section class="movieListComp">
    <div class="movieListItem" ng-repeat="item in $ctrl.response">
      <img ng-click="$ctrl.movieInfoItem(item);" ng-src="https://image.tmdb.org/t/p/w300{{item.poster_path}}"/>
      <div class="about">
        <p>Title: {{item.title}}</p>
        <p>Rating: {{item.vote_average}}</p>
        <p>Description: {{item.overview}}</p>   
      </div>
    </div>
  </section>
    `,
  
  controller: ["MovieService", function(MovieService) {
    const vm = this
    vm.movieInfoItem = (item) => {
      MovieService.sendMovieInfo(item);
    };
  }]

 
}


angular
  .module("app")
  .component("movieList", movieList);