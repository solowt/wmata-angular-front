"use strict";

(function(){
  angular
  .module("trains")
  .controller("StationsController", [
    "$stateParams",
    TrainsControllerFunction
  ]);
  function TrainsControllerFunction($stateParams){
    this.setStation = function(trainsArray){
      this.currentStation = trainsArray
      console.log(this.currentStation)
    }
    this.stations = {
      'Metro Center': [ 'A01', 'C01' ],
      'Farragut North': [ 'A02' ],
      'Dupont Circle': [ 'A03' ],
      'Woodley Park-Zoo/Adams Morgan': [ 'A04' ],
      'Cleveland Park': [ 'A05' ],
      'Van Ness-UDC': [ 'A06' ],
      'Tenleytown-AU': [ 'A07' ],
      'Friendship Heights': [ 'A08' ],
      'Bethesda': [ 'A09' ],
      'Medical Center': [ 'A10' ],
      'Grosvenor-Strathmore': [ 'A11' ],
      'White Flint': [ 'A12' ],
      'Twinbrook': [ 'A13' ],
      'Rockville': [ 'A14' ],
      'Shady Grove': [ 'A15' ],
      'Gallery Pl-Chinatown': [ 'B01', 'F01' ],
      'Judiciary Square': [ 'B02' ],
      'Union Station': [ 'B03' ],
      'Rhode Island Ave-Brentwood': [ 'B04' ],
      'Brookland-CUA': [ 'B05' ],
      'Fort Totten': [ 'B06', 'E06' ],
      'Takoma': [ 'B07' ],
      'Silver Spring': [ 'B08' ],
      'Forest Glen': [ 'B09' ],
      'Wheaton': [ 'B10' ],
      'Glenmont': [ 'B11' ],
      'NoMa-Gallaudet U': [ 'B35' ],
      'McPherson Square': [ 'C02' ],
      'Farragut West': [ 'C03' ],
      'Foggy Bottom-GWU': [ 'C04' ],
      'Rosslyn': [ 'C05' ],
      'Arlington Cemetery': [ 'C06' ],
      'Pentagon': [ 'C07' ],
      'Pentagon City': [ 'C08' ],
      'Crystal City': [ 'C09' ],
      'Ronald Reagan Washington National Airport': [ 'C10' ],
      'Braddock Road': [ 'C12' ],
      'King St-Old Town': [ 'C13' ],
      'Eisenhower Avenue': [ 'C14' ],
      'Huntington': [ 'C15' ],
      'Federal Triangle': [ 'D01' ],
      'Smithsonian': [ 'D02' ],
      'L\'Enfant Plaza': [ 'D03', 'F03' ],
      'Federal Center SW': [ 'D04' ],
      'Capitol South': [ 'D05' ],
      'Eastern Market': [ 'D06' ],
      'Potomac Ave': [ 'D07' ],
      'Stadium-Armory': [ 'D08' ],
      'Minnesota Ave': [ 'D09' ],
      'Deanwood': [ 'D10' ],
      'Cheverly': [ 'D11' ],
      'Landover': [ 'D12' ],
      'New Carrollton': [ 'D13' ],
      'Mt Vernon Sq 7th St-Convention Center': [ 'E01' ],
      'Shaw-Howard U': [ 'E02' ],
      'U Street/African-Amer Civil War Memorial/Cardozo': [ 'E03' ],
      'Columbia Heights': [ 'E04' ],
      'Georgia Ave-Petworth': [ 'E05' ],
      'West Hyattsville': [ 'E07' ],
      'Prince George\'s Plaza': [ 'E08' ],
      'College Park-U of MD': [ 'E09' ],
      'Greenbelt': [ 'E10' ],
      'Archives-Navy Memorial-Penn Quarter': [ 'F02' ],
      'Waterfront': [ 'F04' ],
      'Navy Yard-Ballpark': [ 'F05' ],
      'Anacostia': [ 'F06' ],
      'Congress Heights': [ 'F07' ],
      'Southern Avenue': [ 'F08' ],
      'Naylor Road': [ 'F09' ],
      'Suitland': [ 'F10' ],
      'Branch Ave': [ 'F11' ],
      'Benning Road': [ 'G01' ],
      'Capitol Heights': [ 'G02' ],
      'Addison Road-Seat Pleasant': [ 'G03' ],
      'Morgan Boulevard': [ 'G04' ],
      'Largo Town Center': [ 'G05' ],
      'Van Dorn Street': [ 'J02' ],
      'Franconia-Springfield': [ 'J03' ],
      'Court House': [ 'K01' ],
      'Clarendon': [ 'K02' ],
      'Virginia Square-GMU': [ 'K03' ],
      'Ballston-MU': [ 'K04' ],
      'East Falls Church': [ 'K05' ],
      'West Falls Church-VT/UVA': [ 'K06' ],
      'Dunn Loring-Merrifield': [ 'K07' ],
      'Vienna/Fairfax-GMU': [ 'K08' ],
      'McLean': [ 'N01' ],
      'Tysons Corner': [ 'N02' ],
      'Greensboro': [ 'N03' ],
      'Spring Hill': [ 'N04' ],
      'Wiehle-Reston East': [ 'N06' ]
    }

  }
})();
