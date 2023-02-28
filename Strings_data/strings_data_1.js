// Given the string 'ahb acb aeb aeeb adcb axeb'. Write a regular expression 
// that matches the strings ahb, acb, aeb by pattern: letter 'a', any character, letter 'b'
const str = 'ahb acb aeb aeeb adcb axeb';
const str1 = 'ahb';
const str2 = 'acb';
const str3 = 'aeb';
const re = /a.b/;

console.log(str1.match(re));
console.log(str2.match(re));
console.log(str3.match(re));

const re1 = /a.b/g;
console.log(str.match(re1));

/*
[ 'ahb', index: 0, input: 'ahb', groups: undefined ]
[ 'acb', index: 0, input: 'acb', groups: undefined ]
[ 'aeb', index: 0, input: 'aeb', groups: undefined ]
[ 'ahb', 'acb', 'aeb' ]
*/