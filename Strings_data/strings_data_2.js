//Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest

const str = '2 + 3 223 2223';
const regexp = /(2\s\+\s3).*/; // \s - whitespace    
console.log(str.search(regexp));

// 0