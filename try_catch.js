// In a try catch construction, wrap the code: console.log (a), let a = 3. 
// And display an error - ‘let must be declared’ before use. 
// When running 1/0, the error 'cannot be divided by zero'

try {
    console.log(a);
    let a = 3;
} catch (err) {
    console.log(`let must be declared before use`);
}

try {
    let a = 1;
    let b = 0;
    if (b === 0) {
        throw  new Error('cannot be divided by zero');
    }
    console.log(a/b);
    
} catch (error) {
    console.log(`cannot be divided by zero`);
}

//let must be declared before use
// cannot be divided by zero