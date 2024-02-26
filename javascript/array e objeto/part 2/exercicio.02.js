let ListaDeCompras = {
  produtos: {
    arroz: 10,
    feijão: 8,
    carne: 20,
    leite: 5,
  },
};

let total = 0;
for (let produto in ListaDeCompras.produtos) {
  console.log(ListaDeCompras.produtos[produto]);
  total += ListaDeCompras.produtos[produto];
}

console.log("O total de lista de compras é: " + total);
