const Nipple = require('./nipple.js');

var Nipples = function(num){


var nipples = [];

for(var i = 0;i<num; i++){

        nipples.push(new Nipple());

}

return nipples;

}


module.exports = Nipples;
