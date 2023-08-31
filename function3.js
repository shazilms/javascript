 //write concise declarative function 
 /* an object can contain function*/
 const bic= {
    gear : 2,
    //setGear : function(newGear){ instead of this we can write function as
    setGear(newGear) {
        "use strict";
        this.gear=newGear;
    }
  };
  bic.setGear(3);
  console.log(bic.gear);

  // use class syntax to define a constructor Function

  /* var SpaceShuttle = function(targetPlanet){
    this.targetPlanet = targetPlanet;
  }
  var zeus = new SpaceShuttle('jupiter');
  console.log(zeus.targetPlanet)
  we will use class syntax and build this code*/
  class SpaceShuttle {
    constructor(targetPlanet){
        this.targetPlanet = targetPlanet;
    }
  }
  var zeus = new SpaceShuttle('jupiter');
  console.log(zeus.targetPlanet);

  function makeClass(){
    class vegetables{
        constructor(name){
            this.name = name;
        }
    }
    return vegetables;
  }
  const vegetables = makeClass();
  const carrot = new vegetables('carrot');
  console.log(carrot.name);