let dados = {
    nomes: ['Ana', 'Jhontan', 'Maria', 'fernanda', 'kelvin']
};

let maiorNome = dados.nomes[0];

for (let i = 1; i < dados.nomes.length; i++) {
    if (dados.nomes[i].length > maiorNome.length) {
        maiorNome = dados.nomes[i];
    }
}

console.log('O maior nome na lista é:', maiorNome);





const carros = {
    marcas: ["fiat", "chevrolet", "ford", "volkswagen"]
};

let marcasComF = [];

for (let i = 0; i < carros.marcas.length; i++) {
    let marca = carros.marcas[i];
    
    if (marca.startsWith("f") || marca.startsWith("F")) {
        marcasComF.push(marca);
    }
}
console.log("Marcas que começam com a letra 'F':", marcasComF);

