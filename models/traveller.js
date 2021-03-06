const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => journey.startLocation)
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => journey.endLocation)
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => journey.transport === transport)
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => journey.distance >= minDistance)
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((totalSoFar, journey) => totalSoFar + journey.distance, 0)
};


Traveller.prototype.getUniqueModesOfTransport = function () {
  return this.journeys.map(journey => journey.transport).filter((value, index, array) => array.indexOf(value) === index)
};

// array.map(item => item.age)
//   .filter((value, index, self) => self.indexOf(value) === index)

module.exports = Traveller;
