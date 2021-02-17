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
  return this.journeys.filter((journey) => journey.distance > minDistance)
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((totalSoFar, journey) => totalSoFar + journey.distance, 0)
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const uniqueList = []
  this.journeys.forEach((journey) => {
    if (uniqueList.forEach((item) !== journey.transport)) {
      uniqueList.push(journey.transport)}
  })
  return uniqueList
// tried using a filter and indexOf but couldn't get to work either
};

module.exports = Traveller;
