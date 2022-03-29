import './styles.css';
import resta from './resta';
import sum from './sum';
import updateDiv from './updateDiv';

console.log("Inicio del Programa");



function buttonSubmitClick(){
    const numero1 = <HTMLInputElement>document.getElementById('sumnum1');
    const numero2 = <HTMLInputElement>document.getElementById('sumnum2');
    let resultadoSuma = sum(numero1.value, numero2.value);
    updateDiv(resultadoSuma,"sumRes");
}


function buttonSubmitClick2() {
    console.log("RESTA");
    const numero1 = <HTMLInputElement>document.getElementById('resnum1');
    const numero2 = <HTMLInputElement>document.getElementById('resnum2');

    let resultadoResta = resta(numero1.value, numero2.value);
    updateDiv(resultadoResta,"restaRes");

}

//SUMA

const btn = <HTMLButtonElement>document.getElementById('sumar');
if (btn) {
  btn.addEventListener('click', buttonSubmitClick);
}


//Resta
const btn2 = <HTMLButtonElement>document.getElementById('restar');
console.log(btn2);
if (btn2) {
  btn2.addEventListener('click', buttonSubmitClick2);
}

