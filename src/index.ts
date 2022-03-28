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
        
        if (resultado >= 0 ) {
            console.log(resultado);
            divResult.innerText = "El resulatdo es positivo";
            divResult.innerText = resultado.toString();
            //divResult.innerHTML = String(resultado);
            //TODO: Implementa la asignación del atributo className con valor 'palindrome'
            divResult.className = "resPositive";
        } else {
            console.log(resultado);
            divResult.innerText = "El resultado es Negativo";
            divResult.innerText = resultado.toString();
            //divResult.innerHTML = String(resultado);
            //TODO: Asigna a la propiedad innerText de divResult el valor 'The word is not palindrome, sorry.'
            divResult.className = "resNegative";
        }
    }
}

const btn = document.querySelector('button');
if (btn) {
  console.log('attaching listener');
  //TODO: invoca la función addEventListener de btn con parámetros 'click' y buttonSubmitClick
  btn.addEventListener('click', buttonSubmitClick);
}
