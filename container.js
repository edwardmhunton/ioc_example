
 module.exports = function Container(){

        var services = {};

        //PRIVATE

        function getDeps(deps){ // loop through the deps associated with an implementation and return them in a json to the constructor

          var depObjs = {};
          var d;

          for(var i = 0; i < deps.length; i++){

            var dep = deps[i];
            d = services[dep].implementation;
            depObjs[dep] = new d();

          };

          return depObjs;


        }

        //PUBLIC


        function registerComponentImp(name, implementation, deps){
          services[name] = {implementation:implementation, deps:deps};
        }



        function getImplementaion(name){

          var cla = services[name];

          return new cla.implementation(getDeps(cla.deps)); // pass dependencies into the implementations constructor

        }

        return {
          registerComponentImp: registerComponentImp,
          getImplementaion: getImplementaion
        }

};
