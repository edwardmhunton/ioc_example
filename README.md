# ioc_example in node.js

Container provides way of resolving dependencies and abstracting implementation of services.

To populate the container pass in a key, a class (implementation) and optionally its dependencies as an array:

container.registerComponentImp('bike_builder', BikeBuilder, ['wheel_builder']);

To make use of an implementation request the service from the container via its key:

container.getImplementation('bike_builder');

To demonstrate the inversion of control I have provided two implementations for 'wheel_buildler': FactoryWheels and HandBuiltWheels. The 'wheel_builder' service can be registered with either of these via the command line by running:

npm start HandBuiltWheels | FactoryWheels





