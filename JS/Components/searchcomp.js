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
        console.log(vm.response);
      });
    };

    vm.searchFormGenre = (genre) => {
      MovieService.searchGenre(genre).then((response) => {
        vm.response = response.data.results;
        console.log(vm.response);
      });
    };

  }]
}


angular
  .module("app")
  .component("search", search);