(()=> {

    const fullName = (firstName:string, activo: boolean = false, lastName?:string, ):string => {
        return `${firstName} ${lastName || 'Sin Apellido'} activo: ${activo}`;
    }

    const name = fullName('German', true);

    console.log(name);
    

})()