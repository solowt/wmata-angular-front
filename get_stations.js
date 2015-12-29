var request = require('request')
var url = "https://api.wmata.com/Rail.svc/json/jStations"
var key = "?api_key=635e0ed2348f420cbe874f1bcd5d1b11"

var resp = request(url+key, function(err, res){
  var resa = JSON.parse(res.body)
  var length = resa.Stations.length
  var stations = {}
  for (var i=0;i<length;i++){
    var sName = String(resa.Stations[i].Name);
    if (!stations[sName]){
      stations[sName] = [];
    }
    stations[sName].push(resa.Stations[i].Code)
  }
  console.log(stations)
})
