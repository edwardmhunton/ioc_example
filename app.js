
const Container = require('./container.js');
const BikeBuilder = require('./bikeBuilder.js');
const WheelBuilderInterface = require('./wheelBuilderInterface.js');
const HandBuiltWheels = require('./handbuiltwheels');



var parts = {
  "rim":"mavic",
  "hub":"SOL",
  "spokes":28,
  "disc":true

}



function configureContainer (){

var container = new Container();
container.registerComponentImp(WheelBuilderInterface, HandBuiltWheels, parts);
container.registerComponentImp(BikeBuilder)

return container;

}

function buildABike (){

  container = configureContainer();
  container.getImplementaion('BikeBuilder');


}

buildABike();
