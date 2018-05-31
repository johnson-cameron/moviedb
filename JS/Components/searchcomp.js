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

  <form ng-submit="$ctrl.searchFormRating($ctrl.rating)">
  <input type="text" ng-model="$ctrl.rating"></input>
  <button>Find Rating</button>
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
    vm.searchFormGenre = (genre) => {
      MovieService.searchGenre(genre).then((response) => {
        MovieService.searchGenre2(response).then((response) => {;
        vm.response = response.data.results;
        vm.genre = "";
        });
      });
    };
    vm.searchFormRating = (rating) => {
      MovieService.searchRating(rating).then((response) => {
        vm.response = response.data.results;
        vm.rating = "";
      });
    };

  }]
}

angular
  .module("app")
  .component("search", search);