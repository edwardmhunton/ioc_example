const Spoke = require('./spoke.js');


var Spokes = function(num){

var spokes = [];

for(var i = 0;i<num; i++){

        spokes.push(new Spoke());

}

return spokes;

}


module.exports = Spokes;
