(()=> {

    const fullName = (firstName:string, lastName:string):string => {
        return `${firstName} ${lastName}`;
    }

    const name = fullName('German', 'Contreras');

    console.log(name);
    

})()