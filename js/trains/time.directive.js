(function(){
  angular
  .module('trains')
  .directive('trainTime', [
    "$state",
    directiveFunction
  ])

  function directiveFunction($state){
    return {
      templateUrl: "/js/trains/_train_time.html",
      replace: true,
      controller: "StationsController",
      restrict: 'E', // comMent Attribute Class Element
      scope: {
        code: '=', //@ - string = - object
        station: '=',
        times: '=',
        vm: '='
      },
      link: function(scope){ //function run when directive is loaded
        scope.updateStation = function(trainsArray){
          scope.vm.setStation(trainsArray);
        }
        scope.getTrains = function(){
          if (!scope.lastUpdated || (new Date().getTime() - scope.lastUpdated.getTime())/1000>20) {
            scope.times = []
            console.log("Getting data...")
            scope.lastUpdated = new Date();
            $.ajax({
                  url: "https://api.wmata.com/StationPrediction.svc/json/GetPrediction/"+scope.code[0]+"?api_key=635e0ed2348f420cbe874f1bcd5d1b11",
                  type: "GET",
                  // Request body
                  data: "{body}",
                  dataType: "jsonp"
              })
              .done(function(data) {
                  for (var i=0; i<data["Trains"].length; i++){
                    var train = {
                                  "cars":data["Trains"][i].Car,
                                  "dest":data["Trains"][i].Destination,
                                  "status":data["Trains"][i].Min
                                }
                    scope.times.push(train)
                  }
                  scope.updateStation(scope.times)
                  $state.go('getStations')

              })
              .fail(function() {
                  console.log("Failed Look-up.")
              });
          } else {
            console.log("Please wait 20 seconds in between refreshes...")
          }
        }
      }
    }
  };
})();
