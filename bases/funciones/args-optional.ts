(()=> {

    const fullName = (firstName:string, lastName?:string):string => {
        return `${firstName} ${lastName || 'Sin Apellido'}`;
    }

    const name = fullName('German');

    console.log(name);
    

})()