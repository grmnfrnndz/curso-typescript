(()=> {

    type Hero = {
        name: string;
        age?: number;
        power: string[];
        getName?: () => string;
    }
    
    let myCustomVariable: (string | number | Hero) = 'German';
    console.log(typeof myCustomVariable);
    
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);

    myCustomVariable = {
        name: 'Andres',
        age: 35,
        power: ['super', 'capaz'],
    };
    console.log(typeof myCustomVariable);


    


})()