function somarNumeros(arrayNumeros){
     let soma = 0;
     for(let i = 0; i < arrayNumeros.length; i++){
        soma += arrayNumeros[i];
     }
     return soma;
}
 
const numeros = [1,2,3,4,5];
console.log(somarNumeros(numeros));