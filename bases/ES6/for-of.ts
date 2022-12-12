(()=> {

    type Avenger = {
        name:string;
        weapon:string;
    }

    const ironman:Avenger = {
        name: 'ironman',
        weapon: 'rayo'
    }

    const cap:Avenger = {
        name: 'cap',
        weapon: 'escudo'
    }

    const nick:Avenger = {
        name: 'nick',
        weapon: 'tiro'
    }

    const avengers:Avenger[] = [ironman, cap, nick];

    for (const avenger of avengers) {
        console.log(avenger);
        
    }

})()