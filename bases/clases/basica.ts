(()=> {

    class Avenger {

        // private name: string;
        // private team: string;
        // public realName?: string;
        static avgAge: number = 35;
        static getAvgAge():string {
            // nombre de la clase
            return this.name;
        }

        constructor(
            private name: string, 
            private team:string, 
            public realName?:string,
            avgAge: number = 35
            ) {
                Avenger.avgAge = avgAge;
            }
            
        
        private bio():string {
            return `${this.name} - ${this.team} !!!`; 
        }

    }

    const antman: Avenger = new Avenger('german', 'xxx', 'juan');
    
    // console.log(antman);
    // console.log(antman.bio());
    // console.log(Avenger.getAvgAge());
    // console.log(Avenger.avgAge);

})()