function isPrime (num) { //prime number can be devided by itself or 1
    for (let i=2; i<num; i++) { //numbers from 2 till number
            if (num%i===0) { 
            return false;
        };
    };
    return num>1;   // 1 is not included
};
console.log('1 ', isPrime(1)); //false
console.log('107 ', isPrime(107));//true
console.log('7 ', isPrime(7));//true
