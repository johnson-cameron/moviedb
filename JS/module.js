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
      .otherwise({redirectTo: "/watch-list"});
  });
