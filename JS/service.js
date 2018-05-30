"use strict";

function MovieService($http, $location) {
  const apiKey = "f74deb744f18c80a55023593e6d85143";

  let favList = [];
  const getFavList = () => {
    console.log("getFavList");
  };
  const toSearch = () => {
    $location.path("/search");
  };
  const movieInfo = () => {
    console.log("movieInfo");
  };
  const addFav = () => {
    console.log("addFav");
  };
  const removeFav = () => {
    console.log("removeFav");
  };
  const search = (movie) => {
    return $http({
      method: "GET",
      url: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movie}`
    }).then((response) => {
      favList = response
      console.log(response);
      return response;
    });


    console.log("search");
    console.log(movie);
  }
  return {
    getFavList,
    toSearch,
    movieInfo,
    addFav,
    removeFav,
    search
  };
}

MovieService.$inject = ["$http", "$location"];


angular
  .module("app")
  .factory("MovieService", MovieService);