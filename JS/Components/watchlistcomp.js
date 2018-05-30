"use strict";

const watchList = {
  template:`
  <section>
    <div>
      <img>
      <div>
        <p></p>
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
  .component("watchList", watchList);