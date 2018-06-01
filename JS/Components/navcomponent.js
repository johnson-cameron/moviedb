"use strict";

const navCom = {
  template:`
  <nav>
    <button class="searchButton2" ng-click="$ctrl.search();">Search</button>
    <h1>
      Cool Flix
    </h1>
  
    <img id="syntax" src="images/syntax.png" ng-click="$ctrl.toWL();">
  </nav>
  `,
  controller: ["MovieService", function(MovieService) {
    const vm = this;
    vm.search = () => {
      MovieService.toSearch();
    };
    vm.toWL = () => {
      MovieService.toWL();
    };
  }]
}


angular
  .module("app")
  .component("navCom", navCom);