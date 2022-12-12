(()=>{

    const numeros:number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13];
    let nums = [1,2,3,4,5, '5'];
    nums.push('10');
    console.log(nums);

    let villanos: string[] = ['juan', 'german'];
    villanos.forEach(v => {
        console.log(v.toUpperCase());
        
    });

    nums.forEach(v => {
        console.log(v.toString().toUpperCase());
        
    });

})()