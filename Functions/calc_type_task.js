function calcArgument (parameter) {
    console.log(typeof parameter);
};
//number
calcArgument(14);  //number
calcArgument(NaN);  //number
calcArgument(Infinity); //number
//string
calcArgument('14'); //string
calcArgument(''); //string
//undefined
calcArgument(undefined); //undefined
//boolean
calcArgument(true); //boolean
calcArgument(false); //boolean
//object
calcArgument(null); //object
calcArgument([10,11,12,13,14]); //object
calcArgument(new String('apple')); //object
//symbol
calcArgument(Symbol()); //symbol
calcArgument(Symbol('argument')); //symbol
//function
calcArgument(function(calkMe){}); //function



