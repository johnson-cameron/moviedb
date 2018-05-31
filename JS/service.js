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
  const searchTitle = (movie) => {
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
  const searchGenre = (genre) => {
    return $http({
      method: "GET",
      url: `https://api.themoviedb.org/3/genre/movie/list?api_key=f74deb744f18c80a55023593e6d85143&language=en-US`,     
      // url: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&discover/movie?with_genres=${response.data.genres[index].id}`
      // url: `https://api.themoviedb.org/3/discover/movie?api_key=f74deb744f18c80a55023593e6d85143&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
    }).then((response) => {
      favList = response
      // console.log(response.data.genres);

      let upGenre = genre.charAt(0).toUpperCase() + genre.substr(1);
      // console.log(upGenre);

      for (let index = 0; index < response.data.genres.length; ++index) {
        // console.log(genre);
        
        // console.log(response.data.genres[index].name);
        if (upGenre == response.data.genres[index].name) {
          console.log(`The genre id is ${response.data.genres[index].id}`)
        };
    }
      return response;
    });
    console.log("search");
    console.log(genre);
  }





  return {
    getFavList,
    toSearch,
    movieInfo,
    addFav,
    removeFav,
    searchTitle,
    searchGenre
  };
}

MovieService.$inject = ["$http", "$location"];


angular
  .module("app")
  .factory("MovieService", MovieService);