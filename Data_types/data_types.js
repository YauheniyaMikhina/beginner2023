function task1() {
    console.log('Task 1. Addition');
    let taskAddition = 'task' + 3;
    console.log(taskAddition); //'task3'

    let taskAddition0 = '2' + 3;
    console.log(taskAddition0);//'23'

    let result = true;
    console.log(2+result);//3

    let may = "may";
    console.log(may+=false);//"mayfalse"
}

function task2() {
    console.log('Task 2. Multiplication');
    let taskMultiplication = '3'*5;
    console.log(taskMultiplication);//'15'
    //but
    let taskMultiplication1 = 'question'*5;
    console.log(taskMultiplication1); //NaN

    let taskMultStrBool = true;
    console.log(taskMultStrBool*'answer');//NaN

    let taskMultStrBool0 = true;
    console.log(taskMultStrBool0*'2');//'2'

    let taskMultStrBool00 = false;
    console.log(taskMultStrBool00*'2'); //'0'

    let taskMultNumBool1 = false;
    console.log(taskMultNumBool1*2);//0

    let taskMultNumBool2 = true;
    console.log(taskMultNumBool2*2);//2
}

function task3() {
    console.log('Task 3. Divide');
    let taskDivision = '4'/2;
    console.log(taskDivision);//'2'

    let taskDivision0 = 'cake'/2;
    console.log(taskDivision0); //NaN

    let taskMultStrBool3 = true;
    console.log(taskMultStrBool3/'answer');//NaN

    let taskMultStrBool33 = true;
    console.log(taskMultStrBool33/'2');//0.5

    let taskMultStrBool333 = false;
    console.log(taskMultStrBool333/'2'); //0

    let taskMultNumBool4 = false;
    console.log(taskMultNumBool4/2);//0

    let taskMultNumBool44 = true;
    console.log(taskMultNumBool44/2);//0.5
}

function task4() {
    console.log('Task 4. Conversion');
    //boolean >> string
    let boy = true;
    console.log(typeof boy); //boolean
    boy = String(boy);//now value is a string "true"
    console.log(typeof boy);//string

    //string >> number
    console.log(6-'2'); //4 -number
    console.log('10'/'2'); //5 - number

    //number/value >>string
    let taskAddition1 = 'task' + 3;
    console.log(taskAddition1); //'task3'

    let taskAddition2 = '2' + 3;
    console.log(taskAddition2);//'23'

    //value/string/number >> boolean
    console.log(Boolean('Good_morning!')); // true
    console.log(Boolean(2));//true
    console.log(Boolean());//false
}

task1();
task2();
task3();
task4();
