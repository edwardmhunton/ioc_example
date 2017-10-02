
const Container = require('./container');
const BikeBuilder = require('./bikeBuilder');
const HandBuiltWheels = require('./handbuiltwheels');
const FactoryWheels = require('./factoryWheels');



function configureContainer (wheels){

  //console.log(wheels);

  var container = new Container();
  container.registerComponentImp('wheel_builder', wheels, []);
  container.registerComponentImp('bike_builder', BikeBuilder, ['wheel_builder']);

  return container;

}

function buildABike (wheels){

  if(wheels === 'HandBuiltWheels'){
    w = HandBuiltWheels;
  } else {
    w = FactoryWheels;
  }

  container = configureContainer(w);
  var b = container.getImplementaion('bike_builder');

  console.log(b.wheel_builder.addWheels());

  console.log("Your Wheels Are Ready");



}



buildABike(process.argv[2]);
