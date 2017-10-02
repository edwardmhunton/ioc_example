
const Jib = require('./wheelparts/jib.js');
const Rim = require('./wheelparts/rim.js');
const Spokes = require('./wheelparts/spokes.js');
const Hub = require('./wheelparts/hub.js');
const Nipples = require('./wheelparts/nipples.js');

const SPOKE_NUM = 28;


var HandBuiltWheels = function(){

          jib = new Jib();
          rim = new Rim();
          spokes = new Spokes(SPOKE_NUM);
          hub = new Hub();
          nipples = new Nipples(SPOKE_NUM);

          wheel =  {};


        loadSpokes = function(h, s, w){
               w.hub = h;
               w.spokes = s;

               return w;
        }

        addNipples = function(r, n, w){
                w.rim = r;
                w.nipples = n;

                return w;
        }

        centre = function(w){
              console.log("centering");
              return w;
        }

        finalTrue = function(w){
              console.log("truing");
              return w;
        }


        function addWheels(){

         finalTrue(centre(addNipples(rim, nipples, loadSpokes(hub, spokes, wheel))));

       }

       return {
         addWheels: addWheels
       }

}

module.exports = HandBuiltWheels;
