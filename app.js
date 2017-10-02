
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
container.registerComponentImp('wheel_builder', HandBuiltWheels, []);
container.registerComponentImp('bike_builder', BikeBuilder, ['wheel_builder'])

return container;

}

function buildABike (){

  container = configureContainer();
  var b = container.getImplementaion('bike_builder');

  console.log(b.wheels);



}

buildABike();
