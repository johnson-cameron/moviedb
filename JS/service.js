"use strict";

function MovieService($location) {
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


angular
  .module("app")
  .factory("MovieService", MovieService);