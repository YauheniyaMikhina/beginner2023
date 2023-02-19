function calcArgument (parameter) {
    console.log(typeof parameter);
};
//number
calcArgument(14);  
calcArgument(NaN);  
calcArgument(Infinity);
//string
calcArgument('14');
calcArgument('');
//undefined
calcArgument(undefined);
//boolean
calcArgument(true);
calcArgument(false);
//object
calcArgument(null);
calcArgument([10,11,12,13,14]);
calcArgument(new String('apple'));
//symbol
calcArgument(Symbol());
calcArgument(Symbol('argument'));
//function
calcArgument(function(calkMe){});



