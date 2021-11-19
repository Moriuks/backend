function doMath(number1,number2,callback){
    const res = callback(number1,number2);
    console.log(res);
} 

doMath(5,2,function(number1,number2){
    var calculation = number1 * number2 / 6;
    return calculation;
});