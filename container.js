
 var Container = function(){

        var services = {};


        function registerComponentImp(name, implementation, deps){

      //  console.log("REGISTERED: "+name, implementation, deps)

          services[name] = {implementation:implementation, deps:deps};

          //console.log("services: "+services);

        }

        function getDeps(deps){

          var depObjs = {};
          var d;

          for(var i = 0; i < deps.length; i++){
            var dep = deps[i];


                  d = services[dep].implementation;
                  depObjs[dep] = new d();

          }

          return depObjs;


        }

        function getImplementaion(name){



          var cla = services[name];

          return new cla.implementation(getDeps(cla.deps)); // pass dependencies into the implementations constructor

        }

        return {
          registerComponentImp: registerComponentImp,
          getImplementaion: getImplementaion
        }

}

module.exports =  Container;
