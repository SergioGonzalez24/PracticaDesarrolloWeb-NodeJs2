import './styles.css';
//import converter from './converter';
import sum from './sum';

console.log("Inicio del Programa");

function buttonSubmitClick() {
    //Obtener referencia a inputText
    const numero1 = <HTMLInputElement>document.getElementById('num1');
    const numero2 = <HTMLInputElement>document.getElementById('num2');
    
    let resultado = sum(numero1.value, numero2.value);

    //Actualizar divResult
    const divResult = <HTMLDivElement>document.getElementById('sumRes');
    if (divResult) {
        
        if (resultado > 0 ) {
            console.log(resultado);
            //divResult.innerText = "El resulatdo es positivo";
            divResult.innerText = resultado.toString();
            //divResult.innerHTML = String(resultado);w
            divResult.className = "resPositive";
        } 
        else if (resultado == 0 ) {

            console.log(resultado);
            //divResult.innerText = "El resultado es cero";
            divResult.innerText = resultado.toString();
            divResult.className = "resZero";
        }
        else if (resultado < 0) {
            console.log(resultado);
            //divResult.innerText = "El resultado es Negativo";
            divResult.innerText = resultado.toString();
            //divResult.innerHTML = String(resultado);
            divResult.className = "resNegative";
        } else {
            console.log("NO NUMBER");
            divResult.innerText = "ERROR";
            divResult.className = "resError";
        }
    }
}

const btn = document.querySelector('button');
if (btn) {
  console.log('attaching listener');
  //TODO: invoca la función addEventListener de btn con parámetros 'click' y buttonSubmitClick
  btn.addEventListener('click', buttonSubmitClick);
}
