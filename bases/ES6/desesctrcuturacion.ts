(()=> {

    type Avengers = {
        nick: string;
        ironman: string;
        batman: string;
    }

    const avengers:Avengers = {
        nick: 'german XX',
        ironman: 'german YY',
        batman: 'juan ZZ'
    }

    // const {nick, ironman} = avengers;
    // console.log(nick);
    
    const printAvenger = ({ironman, ...resto}:Avengers ) => {
        console.log(ironman, resto);
        
    }

    printAvenger(avengers);


    const avengerArr:string[] = ['cap', 'jota', 'rusia'];


    // const cap = avengerArr[0];
    // const jota = avengerArr[1];

    const [, jota,] = avengerArr;
    const [cap, , ] = avengerArr;





})()