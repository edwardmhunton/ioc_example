# ioc_example

Container provides way of resolving dependencies and abstracting implementaion of services.

To populate the contatiner pass in a key, a class (implementaion) and optionally its dependencies as an array:

container.registerComponentImp('bike_builder', BikeBuilder, ['wheel_builder']);

To make use of an implemenation request the service from the container via its key:

var b = container.getImplementaion('bike_builder');

To demonstrate the inversion of control I have provided two implementations for 'wheel_buildler': FactoryWheels and HandBuiltWheels. The 'wheel_builder' service can be registered with either of these via the command line by running:

npm start HandBuiltWheels | FactoryWheels





