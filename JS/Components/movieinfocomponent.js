"use strict";

const movieInfo = {
  bindings: {
  },

  template:`
    <section>
      <img ng-src="https://image.tmdb.org/t/p/w300{{$ctrl.movieItem.poster_path}}">
      <button ng-click="$ctrl.movieInfoItem(movieItem);">Add to Watchlist!</button>
    </section>

    <section>
      <h3>Title: {{ $ctrl.movieItem.title }}</h3>
      <p>Rating: {{ $ctrl.movieItem.vote_average }}</p>
      <p>Description: {{ $ctrl.movieItem.overview }}</p>
    </section>
  `,
  controller: ["MovieService", function(MovieService) {
    const vm = this;
    vm.movieItem = MovieService.getMovieInfo();

    vm.movieInfoItem = (movieItem) => {
      MovieService.addFav(vm.movieItem);
  };
  }]
  
}



angular
  .module("app")
  .component("movieInfo", movieInfo);