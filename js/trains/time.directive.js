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
          scope.times = []
          console.log("Getting data...")
          scope.lastUpdated = new Date();
          $.ajax({
                type: "GET",
                url: "http://localhost:3000/",
                data: {code: scope.code},
                dataType: "json"
            })
            .done(function(data) {
              jsonRes = JSON.parse(data.body);
              for (var i=0; i<jsonRes["Trains"].length; i++){
                var train = {
                            cars:jsonRes["Trains"][i].Car,
                            dest:jsonRes["Trains"][i].Destination,
                            status:jsonRes["Trains"][i].Min,
                            locationName:jsonRes["Trains"][i].LocationName
                            }
                scope.times.push(train)
              }
              scope.updateStation(scope.times)
              $state.go('getStations')
            })
            .fail(function() {
              console.log("Failed Look-up.")
          });
        }
      }
    }
  };
})();
