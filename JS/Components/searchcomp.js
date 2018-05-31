"use strict";

const search = {
  template:`
  <form ng-submit="$ctrl.searchFormTitle($ctrl.movie)">
    <input type="text" ng-model="$ctrl.movie"></input>
    <button>Find Movies</button>
  </form>
  

  <form ng-submit="$ctrl.searchFormGenre($ctrl.genre)">
    <input type="text" ng-model="$ctrl.genre"></input>
    <button>Find Genre</button>
  </form>
  <movie-list response="$ctrl.response"></movie-list>
  `,
  
  controller: ["MovieService", function( MovieService) {
    const vm = this;
    vm.searchFormTitle = (movie) => {
      MovieService.searchTitle(movie).then((response) => {
        vm.response = response.data.results;
        vm.movie = "";
      });
    };
    vm.searchFormGenre = (genreId) => {
      MovieService.searchGenre(genreId).then((response) => {
        MovieService.searchGenre2(response).then((response) => {;
        vm.response = response.data.results;
        vm.genre = "";
        });
      });
    };
  }]
}

angular
  .module("app")
  .component("search", search);