
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


if (idade >= 18 && idade <= 25) {
   texaDeJuros = 0.09;
 }else if (idade >= 26 && idade <= 35) {
   texaDeJuros = 0.08;
 }else if (idade >= 36 && idade <= 50) {
   texaDeJuros = 0.07;
 }else {
   texaDeJuros = 0.06;
 }




// let juros = valorEmprestimo * texaDeJuros * numAnos;
// let montante = valorEmprestimo + juros;


// for(let cont = 0; cont < 3; cont++) {
//   valorEmprestimo = parseInt(prompt("Digite o valor do empréstimo"));
//   numAnos = parseInt(prompt("Digite o número de anos"));
//   let juros = valorEmprestimo * texaDeJuros * numAnos;
//   let montante = valorEmprestimo + juros;
//   console.log(montante);
// }



while(true) {
  valorEmprestimo = parseInt(prompt("Dgite o valor do empréstimo"));
  if(valorEmprestimo === 0) {
    break;
  }
  numAnos = parseInt(prompt("Digite o número de anos"));
  let juros = valorEmprestimo * texaDeJuros * numAnos;
  let montante = valorEmprestimo + juros;
  console.log(montante);

}















