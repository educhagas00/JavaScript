var x = { valor: 10 } // objeto com atributo valor 
// x é um ponteiro para o objeto 
var y = x // y recebe o valor do endereço que x possui que é um ponteiro

x.valor = 20;

console.log(x) // valor: 20
console.log(y) // valor: 20