// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)

interface Auto {
  encender:boolean;
  velocidadMaxima:number;
  acelear():void
}

const conducirBatimovil = ( auto:Auto ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
}

const batimovil:Auto = {
  encender:false,
  velocidadMaxima:0,
  acelear(){
    console.log("...... gogogo!!!");
  }
}

batimovil.acelear();


// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface Joker {
  reir?: boolean;
  comer?:boolean;
  llorar?:boolean;
}

const guason: Joker = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason:Joker ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}

reir(guason);


// Cree una interfaz para la siguiente funcion

interface CiudadanoFunction {
  (a: string[]): number
}

const ciudadGotica:CiudadanoFunction = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

console.log(ciudadGotica(['a', 'b']));


// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/

interface Human {
  nombre:string;
  edad:number;
  sexo:string;
  estadoCivil:string
  imprimirBio(): void
}


class Persona implements Human{
  
  constructor(
    public nombre:string,
    public edad:number,
    public sexo:string,
    public estadoCivil:string
  ) {

  }

  imprimirBio():void {
    console.log('BIO');
    
  }

}