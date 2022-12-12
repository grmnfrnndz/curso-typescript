(()=>{


        interface Hero {
            name: string;
            age?: number;
            power: string[];
            getName?: () => string;
        }
    
        // objeto literal
        let flash:Hero = {
            name: 'German',
            age: 35,
            power: ['rapido', 'muy rapido'],
            getName():string {
                return this.name;
            }
        }
    
        let superman:Hero = {
            name: 'Andres',
            age: 35,
            power: ['super', 'capaz'],
            getName():string {
                return this.name;
            }
        }
    
    

})()