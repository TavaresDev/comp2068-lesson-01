//debugging and trouble shooting
try{
    const age  = 41;
    // debugger;
    age = 35;

    if (age > 25 ){
        throw new Error('Todd you are old');
    }
    
}catch(error){
    console.log("tod is idiot")
    console.log(error.message)
    
}finally{
    // executes enyway
    console.log("tod still an idiot")
}

console.log(age);
