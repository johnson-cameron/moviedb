"use strict";

const watchList = {
  template:`
  <section>
    <div ng-repeat="">
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