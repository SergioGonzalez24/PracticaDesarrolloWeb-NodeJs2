function sum(num1:string, num2:string):number {
    console.log("Inicio de la funcion sum");
    //console.log(num1, num2);
    var a = parseFloat(num1);
    var b = parseFloat(num2);


    
    var resultado = a+b;
    console.log(resultado);
    return a + b;
}


export default sum;