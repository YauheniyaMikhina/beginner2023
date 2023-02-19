// 'payment terminal' practical task
const prompt=require("prompt-sync")({sigint:true});// to make possible to work with prompt

function checkName (person) {
    if (person =='Yauheniya') {
        console.log('Hello ' + person);        
    } else {
        console.log('There is no such name');
    }
};

let name = prompt ('Who are you? ');
    
checkName(name); // we need to write an answer Name and the reaction will be according conditions