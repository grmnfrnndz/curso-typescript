(()=> {

    abstract class Mutante {
        constructor(
            public name:string,
            public realName:string
        ) {

        }
    }

    class Xmen extends Mutante {
        salvarMundo() {
            return 'mundo salvado';
        }
    }

    class Villan extends Mutante {
        conquistarMundo() {
            return 'mundo conquistado';
        }
    }

    const logan:Mutante = new Xmen('german', 'andres');
    const magneto:Mutante = new Villan('xxxx', 'tttt');

    const printName = (caracter: Mutante) => {
        console.log(caracter.name);
        
    }
    
    // printName(logan);
    // printName(magneto);


})()