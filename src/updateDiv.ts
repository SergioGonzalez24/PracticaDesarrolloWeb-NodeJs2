function updateDiv(resultado: number, divName: string): void{
    const divResult = <HTMLDivElement>document.getElementById(divName);

    if (divResult) {
        
        if (resultado > 0 ) {
            console.log(resultado);
            divResult.innerText = "El resultado es positivo\n"+resultado.toString();
            //divResult.innerText = resultado.toString();
            //divResult.innerHTML = String(resultado);
            divResult.className = "resPositive";
        } 
        else if (resultado == 0 ) {

            console.log(resultado);
            divResult.innerText = "El resultado es cero \n"+resultado.toString();
            //divResult.innerText = resultado.toString();
            divResult.className = "resZero";
        }
        else if (resultado < 0) {
            console.log(resultado);
            divResult.innerText = "El resultado es Negativo \n"+resultado.toString();
            //divResult.innerText = resultado.toString();
            //divResult.innerHTML = String(resultado);
            divResult.className = "resNegative";
        } else {
            console.log("NO NUMBER");
            divResult.innerText = "ERROR";
            divResult.className = "resError";
        }
    }
}

export default updateDiv;