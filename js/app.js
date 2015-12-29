(function (){
  angular
  .module("wmata_get", [
    "ui.router",
    "trains"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])

  function RouterFunction($stateProvider, $locationProvider){
    $stateProvider
    .state("getStations", {
      url: "/stations",
      templateUrl: "js/trains/index.html",
      controller: "StationsController",
      controllerAs: "StationsViewModel",

    });
  }
})();
