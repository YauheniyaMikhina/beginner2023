// Task 1: Perform addition of various types (string + boolean, string + number, number + boolean)

function additionTypes(arg1, arg2) {
    console.log(arg1 + arg2);
}

additionTypes('task', 3) // 'task3'
additionTypes('2', 3) //'23'
additionTypes(2, true) // 3  
additionTypes("may", false) // "mayfalse"

// Task 2: Perform multiplication of various types (string * boolean, string * number, number * boolean)

function multiplicationTypes(arg1, arg2) {
    console.log(arg1 * arg2);
}

multiplicationTypes('3', 5) // '15'    
multiplicationTypes('question', 5)  // NaN
multiplicationTypes(true, 'answer') // NaN
multiplicationTypes(true, '2') // '2'
multiplicationTypes(false, '2') // '0'
multiplicationTypes(false, 2) // 0
multiplicationTypes(true, 2) // 2

// Task 3: Divide different types (string / boolean, string / number, number / Boolean)

function divisionTypes(arg1, arg2) {
    console.log(arg1 / arg2);
}

divisionTypes('4', 2) //'2'
divisionTypes('cake', 2) //NaN
divisionTypes(true, 'answer') //NaN
divisionTypes(true, '2') //0.5
divisionTypes(false, '2') //0
divisionTypes(false, 2) //0
divisionTypes(true, 2) //0.5

// Task 4: Perform explicit conversion (number, string, boolean)
function conversionTypes() {
    console.log('Task 4: conversion');
    //boolean >> string
    let boy = true;
    console.log(typeof boy); //boolean
    boy = String(boy);//now value is a string "true"
    console.log(typeof boy);//string

    //string >> number
    console.log(6-'2'); //4 -number
    console.log('10'/'2'); //5 - number

    //number/value >>string
    function additionTypes(arg1, arg2) {
        console.log(arg1 + arg2);
    }
    additionTypes('task', 3) // 'task3'
    additionTypes('2', 3) //'23'

    //value/string/number >> boolean
    console.log(Boolean('Good_morning!')); // true
    console.log(Boolean(2));//true
    console.log(Boolean());//false
}

conversionTypes();

