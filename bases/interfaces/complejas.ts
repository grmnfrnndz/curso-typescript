(()=>{

    interface Client {
        name: string;
        age?: number;
        address?: Address,
        getFullAddress(id:string):void;
    }

    interface Address {
        id:number;
        zip:string;
        city:string;
    }

    const client: Client = {
        name: 'German',
        age: 25,
        address : {
            id: 125,
            zip: 'KS123',
            city: 'Juan'

        },
        getFullAddress(id:string):string {
            if (this.address) return this.address.city
            return 'Sin especificar';
        }
    }

    const client2: Client = {
        name: 'Andres',
        age: 35,
        address : {
            id: 125,
            zip: 'KS123',
            city: 'Juan'

        },
        getFullAddress(id:string):string {
            if (this.address) return this.address.city
            return 'Sin especificar';
        }
    }




})()