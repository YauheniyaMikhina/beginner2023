//Task 4: Convert numeric array to Boolean

let arr = [0, 12, 25];
let arrB = arr.map(item => toBoolean(item));
function toBoolean (a) {
    return Boolean(a);
}
console.log(arrB);
// [ false, true, true ]