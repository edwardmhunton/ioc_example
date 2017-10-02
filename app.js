
const Container = require('./container');
const BikeBuilder = require('./bikeBuilder');
const HandBuiltWheels = require('./handbuiltwheels');
const FactoryWheels = require('./factoryWheels');



function configureContainer (wheels){

  var container = new Container();
  container.registerComponentImp('wheel_builder', [wheels], []);
  container.registerComponentImp('bike_builder', BikeBuilder, ['wheel_builder']);

  return container;

}

function buildABike (wheels){

  container = configureContainer(wheels);
  var b = container.getImplementaion('bike_builder');

  b.wheel_builder.addWheels();



}

buildABike(wheels);
