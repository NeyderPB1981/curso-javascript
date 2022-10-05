/*const lista1 =[
    100,
    200,
    300,
    500,
]; */

/*let = sumaLista1 = 0;
for(let i = 0; i < lista1.length; i++ ){
   sumaLista1 = sumaLista1 + lista1[i];
   
}; */

  function  calPromedio(lista){
        let = sumaLista = 0;
        for(let i = 0; i < lista.length; i++ ){
        sumaLista = sumaLista + lista[i];  
        }
        const promedioLista = sumaLista / lista.length;
        return promedioLista;
    };

    console.log(calPromedio([100, 200, 300, 500,]));

function calculaPromedio(){
    const inputCant = document.getElementById("cant");
    cant = inputCant.value;

    const inputNota1 = document.getElementById("nota1");
    nota1 = inputNota1.value;
    
    const inputNota2 = document.getElementById("nota2");
    nota2 = inputNota2.value;

    const inputNota3 = document.getElementById("nota3");
    nota3 = inputNota3.value;

    const inputNota4 = document.getElementById("nota4");
    nota4 = inputNota4.value;
    const PromedioAritmetica = (Number(nota1)+Number(nota2)+Number(nota3)+Number(nota4))/cant;
    
    // const PromedioAritmetica = calPromedio(Number(nota1)+Number(nota2)+Number(nota3)+Number(nota4));
    console.log("Promedio es :" + PromedioAritmetica);

}