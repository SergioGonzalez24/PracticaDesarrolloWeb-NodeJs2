function sum(condi1:boolean, condi2:boolean,num1:string, num2:string):number {
    var a = parseFloat(num1);
    var b = parseFloat(num2);

    if (condi1 && condi2) {
        var resultado = a+b;
        console.log(resultado);
        return a + b;
    }
    else {
        return 0;
    }
}

export default sum;