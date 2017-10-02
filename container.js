
 var Container = function(){

        var services = [];


        function registerComponentImp(interface, implementation, deps, params){

          console.log("REGISTERED: "+interface,implementation, params)

          services.push({interface:{deps:deps, implementation:implementation, params:params}});

          console.log("services: "+services);

        }

        function getImplementaion(interface){

          var cla = services[interface];

          console.log(cla);

                return new cla;

        }

        return {
          registerComponentImp: registerComponentImp,
          getImplementaion: getImplementaion
        }

}

module.exports =  Container;
