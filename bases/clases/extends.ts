(()=> {

    class Avenger {
        constructor(
            public name:string,
            public realName:string 
        ) {
            console.log('Avenger');
        }
        
        protected getFullName():string {
            return `Avenger ${this.name} - ${this.realName}`;
        }
    }

    class Xmen extends Avenger {
        constructor(
            name:string,
            realName:string,
            public isMutuan: boolean
        ) {
            super(name, realName);
            console.log('Xmen');
        }

        getFullNameDesdeXmen() {
            console.log(super.getFullName());
            
        }

        get fullName() {
            return this.name;
        }

        set fullName(name:string) {
            this.name = name;
        }

    }

    const wolf:Xmen = new Xmen('German', 'Juan', true);


})()