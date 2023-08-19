class Engine {
   constructor(engineType:any)
   {

   }
}

class Tiers {
 constructor(numOfTiers:number)
 {
    
 }
}

class Car {
    engine: Engine;
    tiers: Tiers;

    constructor(engine:Engine,tiers:Tiers) {
        //this.engine = new Engine();
        //this.tiers = new Tiers();
        this.engine=engine;
        this.tiers=tiers;
    }
}