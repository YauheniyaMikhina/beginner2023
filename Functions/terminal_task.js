// 'payment terminal' practical task
const prompt=require("prompt-sync")({sigint:true});

function checkName (person) {
    if (person =='Yauheniya') {
        console.log('Hello ' + person);        
    } else {
        console.log('There is no such name');
    }
};

let name = prompt ('Who are you? ');
    
checkName(name);