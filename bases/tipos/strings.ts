(()=> {

    const batman:string = 'Batman';
    const linternaVerde:string = 'Linterna Verde';
    const volcanNegro:string = `Hero Volvan Negro`;

    console.log(`Utilizando interpolacion: ${batman.toUpperCase()}`)

    console.log(batman.toUpperCase());
    
    console.log(batman[10]?.toUpperCase() || 'No presente.');

})()