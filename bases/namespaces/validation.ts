
namespace Validations {

    export const validateText = (text:string) => {
        return (text.length > 3) ? true : false;
    }

    export const validateDate = (fecha:Date) => {
        return (isNaN(fecha.valueOf())) ? false : true;
    }


}

console.log(Validations.validateText('German'));

