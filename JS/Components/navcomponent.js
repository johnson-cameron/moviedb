"use strict";

const navCom = {
  template:`
  <nav>
    <button ng-click="$ctrl.search();">Search</button>
    <h1>
      HotFlix
    </h1>
  
    <img>
  </nav>
  `,
  controller: ["MovieService", function(MovieService) {
    const vm = this;
    vm.search = () => {
      MovieService.toSearch();
    };
  }]
}


angular
  .module("app")
  .component("navCom", navCom);