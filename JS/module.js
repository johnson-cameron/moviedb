"use strict";

angular
  .module("app", ["ngRoute"])
  .config(function($routeProvider) {
    $routeProvider
      .when("/movie-list", {
        template: "<movie-list></movie-list>"
      })
      .when("/watch-list", {
        template: "<watch-list></watch-list>"
      })
      .when("/search", {
        template: "<search></search>"
      })
      .when("/movie-info", {
        template: "<movie-info></movie-info>"
      })
      .otherwise({redirectTo: "/watch-list"});
  });
 