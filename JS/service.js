"use strict";

function MovieService($http, $location) {
  const apiKey = "f74deb744f18c80a55023593e6d85143";
  const vm = this;
  let genreId =  "";
  let favList = [];
  let movieItem = {};

  const toSearch = () => {
    $location.path("/search");
  };
  const sendMovieInfo = (item) => {
    movieItem = item;
    $location.path("/movie-info");
  };
  const getMovieInfo = () => {
    $location.path("/movie-info");
    return movieItem;
  }
  const addFav = (movieItem) => {
    favList.push({
      movieItem
    })
    $location.path("/watch-list");
  };
  const getFavList = () => {
    return favList;
  };
  const removeFav = (index, list) => {
    favList.splice(index,1);
    $location.path("/watch-list");
  };
  const searchTitle = (movie) => {
    return $http({
      method: "GET",
      url: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movie}`
    }).then((response) => {
      
      return response;
    });
  };
  const toWL = () => {
    $location.path("/watch-list");
    console.log("service");
  };
  const searchGenre = (genre) => {
    return $http({
      method: "GET",
      url: `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`,     
    }).then((response) => {
      let upGenre = genre.charAt(0).toUpperCase() + genre.substr(1);
      for (let index = 0; index < response.data.genres.length; ++index) {
        if (upGenre == response.data.genres[index].name) {
          genreId = `${response.data.genres[index].id}`;
          return genreId;
        };
    }
    });
  }

  const searchRating = (rating) => {
    return $http({
      method: "GET",
      url: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=vote_average&include_adult=false&include_video=false&page=1&vote_average.gte=${rating}`
    }).then((response) => {
      return response;
    });

  }







  const searchGenre2 = (response) => {
    return $http({
      method: "GET",
      url: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}`
    }).then((response) => {

    return response;
  })
  } 
  return {
    getFavList,
    toSearch,
    sendMovieInfo,
    addFav,
    removeFav,
    searchTitle,
    searchGenre,
    searchGenre2,
    getMovieInfo,
    searchRating,
    toWL
  };
}
MovieService.$inject = ["$http", "$location"];

angular
  .module("app")
  .factory("MovieService", MovieService);