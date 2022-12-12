(()=> {

    interface Xmen {
        name: string;
        realName: string;
        mutuanPower(id:number):string
    }

    interface Human {
        age:number;
    }

    class Mutuan implements Xmen, Human{
        constructor(
            public name: string, 
            public realName:string, 
            public age: number
        ) {}

        mutuanPower(id: number): string {
            return `${this.name} ${this.realName}`;
        }

    }



})()