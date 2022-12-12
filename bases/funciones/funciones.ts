(()=> {

    const hero: string = 'german';

    function returnName():string {
        return hero;
    }

    const activateBatisignal = ():string => {
        return 'BatiSignal';
    }

    console.log(typeof activateBatisignal);

    const heroName = returnName();
    

})()