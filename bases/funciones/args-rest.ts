(()=> {

    const fullName = (firstName:string, ...restArgs:string[]):string => {
        return `${firstName} ${restArgs.join(' ')}`;
    }

    const superman = fullName('German', 'Andres', 'Contreras', 'Fernandez');

    console.log({superman});
    

})()