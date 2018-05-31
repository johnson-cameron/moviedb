"use strict";

function MovieService($http, $location) {
  const apiKey = "f74deb744f18c80a55023593e6d85143";
  let genreId =  "";
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
  const searchTitle = (movie) => {
    return $http({
      method: "GET",
      url: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movie}`
    }).then((response) => {
      favList = response
      return response;
    });

  }
  const searchGenre = (genre) => {
    return $http({
      method: "GET",
      url: `https://api.themoviedb.org/3/genre/movie/list?api_key=f74deb744f18c80a55023593e6d85143&language=en-US`,     
      // url: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&discover/movie?with_genres=${response.data.genres[index].id}`
      // url: `https://api.themoviedb.org/3/discover/movie?api_key=f74deb744f18c80a55023593e6d85143&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
    }).then((response) => {
      favList = response
      let upGenre = genre.charAt(0).toUpperCase() + genre.substr(1);
      for (let index = 0; index < response.data.genres.length; ++index) {
        if (upGenre == response.data.genres[index].name) {
          genreId = `${response.data.genres[index].id}`;
          return genreId;
        };
    }
    });
  }
  const searchGenre2 = (response) => {
    return $http({
      method: "GET",
      url: `https://api.themoviedb.org/3/discover/movie?api_key=f74deb744f18c80a55023593e6d85143&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}`
    }).then((response) => {

    return response;
  })
  } 
  return {
    getFavList,
    toSearch,
    movieInfo,
    addFav,
    removeFav,
    searchTitle,
    searchGenre,
    searchGenre2
  };
}
MovieService.$inject = ["$http", "$location"];

angular
  .module("app")
  .factory("MovieService", MovieService);