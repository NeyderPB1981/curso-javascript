const lista1 =[1,2,3,1,2,3,1,3,1,4,1,2,1,3];


const lista1Count ={};

lista1.map(
    function(elemento){
        if(lista1Count[elemento]){
            lista1Count[elemento] +=1;
        }else{
            lista1Count[elemento] = 1;
        }
        
    }
);

lista1;
lista1Count;

lista1Array = Object.entries(lista1Count).sort(
    function (valorAcumulado, nuevoValor){
        
    }
);