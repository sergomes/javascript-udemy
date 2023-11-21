
/*

SISTEMA DE CADASTRO DO BANCO

*/

let nome = "Manuel";
let sobrenome = "Silva";
let idade = 24;
const numcliente = 095864;
let valorEmprestimo = 150000;
let texaDeJuros = 0.10;
let numAnos = 6;
let ehBomPagador = true;

/*

  Montante = valorEmprestimo + juros
  juros = valorEmprestimo * taxaDeJuros * numAnos

*/

let juros = valorEmprestimo * texaDeJuros * numAnos;
let montante = valorEmprestimo + juros;

console.log("Valor do montante: " + montante);





