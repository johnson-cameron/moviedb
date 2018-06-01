"use strict";

const watchList = {
  template:`
  <section class="movieListComp">
    <div class="movieListItem" ng-repeat = "list in $ctrl.favList">
      <img ng-src="https://image.tmdb.org/t/p/w300{{list.movieItem.poster_path}}">
      <div class="about">
      <h4> {{ list.movieItem.title }}</h4>
      <button id="removeButton" ng-click="$ctrl.removeFav($index, list);" >Remove from Watchlist</button>
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
    }
  }]
}


angular
  .module("app")
  .component("watchList", watchList);