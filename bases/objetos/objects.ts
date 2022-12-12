(()=> {
    // objeto literal
    let flash:{
        name: string,
        age?: number,
        power: string[],
        getName?: () => string
    } = {
        name: 'German',
        age: 35,
        power: ['rapido', 'muy rapido'],
        getName():string {
            return this.name;
        }
    }

    let superman:{
        name: string,
        age?: number,
        power: string[],
        getName?: () => string
    } = {
        name: 'Andres',
        age: 35,
        power: ['super', 'capaz'],
        getName():string {
            return this.name;
        }
    }


    console.log(flash);
    

})()