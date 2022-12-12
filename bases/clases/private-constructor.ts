(()=> {

    class Apocalipsis {

        static instance:Apocalipsis;

        private constructor(
            public name: string
        ){}

        static callApocalipsis():Apocalipsis {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis('Soy el unico');
            }

            return Apocalipsis.instance;
        }

        changeName(name:string) {
            this.name = name;
        }

    }


    // creando un singleton
    const apocalipsis1 = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();

    apocalipsis2.changeName('german');

    // console.log(apocalipsis1, apocalipsis2);
    

})()