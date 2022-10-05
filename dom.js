const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const result = document.querySelector('#Resultado');


//form.addEventListener('submit', sumarInputValues);

// function sumarInputValues(event){
//     event.preventDefault();
//    // console.log(Number(input1.value) + Number(input2.value));
//     const resul = Number(input1.value) + Number(input2.value);
//     result.innerText ="La suma es " + resul;
// }

btn.addEventListener('click',sumarInputValues);
function sumarInputValues(event){
    event.preventDefault();
   // console.log(Number(input1.value) + Number(input2.value));
    const resul = Number(input1.value) + Number(input2.value);
    result.innerText ="La suma es " + resul;
}
// const p = document.querySelector('p');
// const parrafo = document.getElementsByClassName('parrafo');
// const pid = document.getElementById('pid');
// const input = document.querySelector('input');


//h1.innerHTML ='Nuevo parrafo';

//console.log(h1.getAttribute('pantalla')); // Muestra el atributo de la clase

//console.log(h1.getAttribute('class'));
//h1.setAttribute('class', 'samsung');

//h1.classList.add('samsung');//agrega un atributo a la clase
//h1.classList.remove('soni');// elimina un atributo a la clase


// const img = document.createElement('img');
// img.setAttribute('src', 'http://www.asercol.com/query/images/logo-neyderp.png');
// console.log(img);
//pid.innerHTML ="";
//pid.append(img); 