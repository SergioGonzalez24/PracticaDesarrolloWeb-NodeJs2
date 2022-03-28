import './styles.css';
import converter from './converter';
import sum from './sum';

function buttonSubmitClick() {
    //Obtener referencia a inputText
    const numero1 = <HTMLInputElement>document.getElementById('num1');
    const numero2 = <HTMLInputElement>document.getElementById('num2');
    
    var isNumero = converter(numero1.value);
    var isNumero2 = converter(numero2.value);
    
    let resultado = sum(isNumero,isNumero2,numero1.value, numero2.value);


    
    


    //Actualizar divResult
    const divResult = <HTMLDivElement>document.getElementById('sumRes');
    if (divResult) {
        if (isNumero && isNumero2) {
            console.log(resultado);
            divResult.innerHTML = String(resultado);
            //TODO: Implementa la asignación del atributo className con valor 'palindrome'
            divResult.className = "resSuma";
        } else {
            divResult.innerText = 'Los valores no son numeros'
            //TODO: Asigna a la propiedad innerText de divResult el valor 'The word is not palindrome, sorry.'
            divResult.className = "errorNum";
        }
    }
}

const btn = document.querySelector('button');
if (btn) {
  console.log('attaching listener');
  //TODO: invoca la función addEventListener de btn con parámetros 'click' y buttonSubmitClick
  btn.addEventListener('click', buttonSubmitClick);
}