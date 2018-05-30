"use strict";

const movieInfo = {
  template:`
    <section>
      <img>
      <button>Add or Remove</button>
    </section>

    <section>
      <h3>Title:</h3>
      <p>Rating:</p>
      <p>Actors:</p>
      <p>Description:</p>
    </section>
  `,
  controller: ["MovieService", function(MovieService) {
    const vm = this;
    vm.signUp = (user) => {
      MovieService.setUserProfile(user);
    };
  }]
}


angular
  .module("app")
  .component("movieInfo", movieInfo);