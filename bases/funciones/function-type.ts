(()=>{

    const addNumbers = (a:number, b:number):number => a + b;
    const greet = (name:string):string => `Hola ${name}`;
    const saveTheWorld = ():string => `El mundo esta a salvo`;


    // let myFunction: Function;
    let myFunction: () => string;

    // myFunction = 10;
    // console.log(myFunction);

    // myFunction = addNumbers;
    // console.log(myFunction(1, 2));

    // myFunction = greet;
    // console.log(myFunction('German'));

    // myFunction = saveTheWorld;
    // console.log(myFunction());


})()