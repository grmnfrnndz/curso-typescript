(()=> {

    enum AudioLevel {
        min = 1,
        medium,
        max = 10
    }

    let currentAudio = AudioLevel.medium;

    console.log(AudioLevel.min);
    console.log(AudioLevel.medium);
    console.log(AudioLevel.max);
    console.log(AudioLevel);
    

})()