const livros = {
     'o iluminado': 50,
     'os sete maridos de Evenly Hugo': 60,
     'O Hobbit': 0
    
};

let livroComValorZero = 0;
 for (let livro in livros){
    if(livros[livro] === 0) {
    livroComValorZero = livro + ' custa ' + livros[livro];
    }
}
console.log("O livro com valor zero é: "+ livroComValorZero)