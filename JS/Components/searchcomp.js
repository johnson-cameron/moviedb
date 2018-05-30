"use strict";

const search = {
  template:`
  <form ng-submit="">
    <input type="text"></input>
    <button>Find Movies</button>
  </form>
  `,
  controller: ["MovieService", function(MovieService) {
    const vm = this;

  }]
}


angular
  .module("app")
  .component("search", search);