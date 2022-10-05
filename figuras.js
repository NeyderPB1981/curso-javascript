console.group("Cuadrado");

function perimetroCuadrado(ladoCuadrado){
    var resultado = ladoCuadrado * 4;
    return resultado;
} 
//console.log(perimetroCuadrado());

function areaCuadrado(lado){
    var resultado = lado *lado;
    return resultado;
} 
//console.log(areaCuadrado());

console.groupEnd();

console.group("Triangulo");

function perimetoTriangulo(lado1, lado2, base){
    var resultado = base + lado2 + base;
    return resultado
} 
//console.log(perimetoTriangulo(5, 6, 4));

function areaTriangulo(base, altura){
    var resultado = (base * altura) / 2;
    return resultado
} 
console.log(areaTriangulo(5, 6));

function diametroCirculo(radio){
    var resultado = radio *2 ;
    return resultado;
}
console.log(diametroCirculo(8));

function perimetroCirculo(radio){
    const diametro =  diametroCirculo(radio);
    const PI = Math.PI;
    var resultado = diametro * PI;
    return resultado;
}
console.log(perimetroCirculo(8));

function areaCirculo (radio){
    const PI = Math.PI;
    resultado = PI * radio ** 2;
    return resultado; 
}
console.log(areaCirculo(5));


function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB **2 ;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase **2;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}
 
console.log(alturaTrianguloIsosceles(6,6,4));

console.groupEnd();

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InpuCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    const PerimetroC = document.getElementById("PerimetroC");
    PerimetroC.innerHTML ="El perimetro del cuadrado es: $" + perimetro;
   //alert("El perimetro es: " + perimetro);

}

function calcularArea(){
    const input = document.getElementById("InpuCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    const AreaC = document.getElementById("AreaC");
    AreaC.innerHTML = "El área del cuadrado es: $"+ area;
   // alert("El área es: " + area);

}

function calcularAreaTRiangulo(){
    const input1 = document.getElementById("idBaseTriangulo");
    const base = input1.value;
    const input2 = document.getElementById("idAlturaTriangulo");
    const altura = input2.value;
    const resultado = areaTriangulo(base,altura);
    const AreaT = document.getElementById("AreaT");
    AreaT.innerHTML ="El área del Triángulo es: $" + resultado;
   // alert("El área del Triángulo es: " + resultado);
}