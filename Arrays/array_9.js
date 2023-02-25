// Task 9: Implement a loop that prints prime numbers to the console
function isPrime (a) {  // a function to find out whether the number is prime
    if (a==1||a==0) { // 0 and 1 are not prime
        return false;
    }
    for (let i=2; i<a; i++) { //a loop from 2 till a
        if (a%i==0) { // prime number may not be devided except by 1 or by itself
            return false;
        }
        return true;
    }
}
let c = 15; // example
for (let i=1; i<=15; i++) {
    if(isPrime(i)) {
        console.log(i);
    }
}
//3
//5
//7
//9
//11
//13
//15

   



