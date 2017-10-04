# ioc_example

Container provides way of resolving dependencies and abstracting implementaion of services.

To populate the contatiner pass in a key, a class (implementaion) and optionally its dependencies as an array:

container.registerComponentImp('bike_builder', BikeBuilder, ['wheel_builder']);

To make use of an implemenation request the service from the container via the key:
