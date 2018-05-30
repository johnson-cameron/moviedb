"use strict";

const movieList = {
  template:`
  <section>
  <div>
    <img>
    <div>
      <p>hello</p>
      <p></p>
      <p></p>
    </div>
  </div>
  </section>
  `,
  controller: ["MovieService", function(MovieService) {
    const vm = this;

  }]
}


angular
  .module("app")
  .component("movieList", movieList);