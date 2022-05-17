// Exercícios de interpretação de código
// 1-
// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// A - Se caso der impar ele vai morar o If, se caso der par vai mostrar o Else.
// B - Ele imprime passou caso for Impar
// C - Ele imprime "Não passou no teste" se caso for par.

// ----------------------------------------------------------------------------------
// Exercícios de interpretação de código
// 2- 
// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// A - 
// B - 
// C - 

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break;
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// A - Ele mostra os valores das frutas citadas e o preço delas.
// B - Será impresso 2.25
// C - Ele iria imprimir 5

// ----------------------------------------------------------------------------------
// Exercícios de interpretação de código
// 3 - 

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
//   let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// A - Está testando se o numero digitado pelo usuario é maior que 0 e imprimindo a mensagem passou no teste.
// B - Aparece que passou no teste porém mostra um erro, se caso digitar -10 ele mostra apenas o erro. 
// C - O erro acontece porque a variavel let mensagem não pode estar no bloco do if.

// ----------------------------------------------------------------------------------

// Exercícios de escrita de código
// 1- 

// const idade = Number(prompt("Qual sua idade? "));

// if (idade >= 18) {
//     console.log("Você pode dirigir");
 
// } else {
//     console.log("Você não pode dirigir.");   
// }

// ----------------------------------------------------------------------------------

// Exercícios de escrita de código
// 2- 

// let horarioAula = prompt("Em qual turno você estuda: N = Noturno / V = Vespertino / M = Matutino");
// if (horarioAula === "N") {
//     console.log("Boa noite!")
// } else if (horarioAula === "V") {
//     console.log("Boa tarde!")
// } else {
//     console.log("Bom dia")
// }

// ----------------------------------------------------------------------------------
// Exercícios de escrita de código
// 3- 

// let horarioAulaSwitch = prompt("Em qual turno você estuda: N = Noturno / V = Vespertino / M = Matutino").toLowerCase();

// switch (horarioAulaSwitch) {
//     case "n":
//       console.log("Boa noite.")
//       break;
//     case "v":
//       console.log("Boa tarde")
//       break;
//     case "m":
//       console.log("Bom dia")
//       break;
//     default:
//       console("Você nao digitou um valor válido use n / v / m")
//       break;
// }

// ----------------------------------------------------------------------------------



