function filtrarStrings (arraydestrins){
      const novaArray = [];
      for(let i = 0; i< arraydestrins.length; i++){
          if (arraydestrins[i].length>5){
            novaArray.push(arraydestrins[i]);

          }
      }
      return novaArray;
}
const strings = ["banana","uva","abacaxi","morango","melancia"];
console.log(filtrarStrings(strings));