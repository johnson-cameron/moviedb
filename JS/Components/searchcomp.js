"use strict";

const search = {
  template:`
  <form ng-submit="$ctrl.searchForm($ctrl.movie)">
    <input type="text" ng-model="$ctrl.movie"></input>
    <button>Find Movies</button>
  </form>
  <movie-list></movie-list>
  `,
  controller: ["MovieService", function(MovieService) {
    const vm = this;
    vm.searchForm = (movie) => {
      MovieService.search(movie);
    };
  }]
}


angular
  .module("app")
  .component("search", search);