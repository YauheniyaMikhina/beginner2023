function isPrime (num) {
    for (let i=2; i<num; i++) {
            if (num%i===0) {
            return false;
        };
    };
    return num>1;   
};
console.log('1 ', isPrime(1));
console.log('107 ', isPrime(107));
console.log('7 ', isPrime(7));
