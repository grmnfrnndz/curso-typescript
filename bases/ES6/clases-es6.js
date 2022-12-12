

class Avenger {
    name;
    power;

    constructor(name= 'No Name', power = 0) {
        this.name = name;
        this.power = power;
    }

}

class FlyingAvenger extends Avenger {
    flying;

    constructor(name, power) {
        super(name, power);
        this.flying = true;
    }

}


const hulk = new Avenger('German', 150);
const falcon = new Avenger('Andres', 220);

console.log(hulk);
console.log(falcon);

