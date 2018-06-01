"use strict";

const movieInfo = {

  template:`
  <section id="movieInfo">
    <section id="movieLeft">
      <img ng-src="https://image.tmdb.org/t/p/w400{{$ctrl.movieItem.poster_path}}">
    </section>

    <section id="movieRight">
      <h3>{{ $ctrl.movieItem.title }}</h3>
      <p class="movieInfoP">Rating: {{ $ctrl.movieItem.vote_average }}</p>
      <p class="movieInfoP">Description: {{ $ctrl.movieItem.overview }}</p>
      <button id="infoButton" ng-click="$ctrl.movieInfoItem(movieItem);">Add to Watchlist!</button>
    </section>
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