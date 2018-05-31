"use strict";

const watchList = {
  template:`
  <section class="watchListMovie">
    <div ng-repeat = "list in $ctrl.favList">
      <img ng-src="https://image.tmdb.org/t/p/w300{{list.movieItem.poster_path}}">
      <button ng-click="$ctrl.removeFav($index, list);" >Remove from Watchlist</button>
      <div>
        <h3>Title: {{ list.movieItem.title }}</h3>
        <p>Rating: {{ list.movieItem.vote_average }}</p>
        <p>Description: {{ list.movieItem.overview }}</p>
      </div>
    </div>
  </section>
  `,
  controller: ["MovieService", function(MovieService) {
    const vm = this
    vm.favList = MovieService.getFavList();
    const removeFav = (index, list) => {
      favList.splice(index,1);
      $location.path("/watch-list");
    };
    vm.removeFav = (index,list) => {
      MovieService.removeFav(index, list);
      console.log(index, list);
    }
  }]
}


angular
  .module("app")
  .component("watchList", watchList);