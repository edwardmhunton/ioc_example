var FactoryWheels = function(){


  function addWheels(){

        console.log("not nice");
        return ["bag of potatos"]; 
  }


  return {

        addWheels: addWheels

  }





}

module.exports = FactoryWheels;
