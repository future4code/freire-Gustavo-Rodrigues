// Exercícios de interpretação de código

/* 

1-

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)     //false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado)    //false

resultado = !resultado && (bool1 || bool2)
console.log("c. ", resultado) //true

console.log("d. ", typeof resultado)  //boolean

*/

//---------------------------------------------------------------------

// Exercícios de interpretação de código

/*

2- 
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

será impresso uma concatenação dos 2 numeros digitados
pois na variavel soma ele está concatenando ao invés de somar

*/

//-------------------------------------------------------------------

// Exercícios de interpretação de código

/*

3- 

Para o código funcionar 


*/

// Exercícios de escrita de código
// 1-

let idade = prompt("Qual sua idade?");
let idadeAmigo = prompt("Qual a idade do seu melhor amigue");
let comparacao = idade === idadeAmigo
let diferenca = (idade - idadeAmigo)
console.log("Sua idade é maior do que a do seu melhor amigo?", comparacao);
console.log("A diferença de idade é de: ", diferenca)

// Exercícios de escrita de código
// 2- 

let numPar = prompt("Insira um número par:");
let restoDaDivisao = (numPar % 2);
console.log(restoDaDivisao)
//Caso ele inserir um numero par, todo resultado será 0
// Caso ele inserir um numero impar, todo resultado será 1

// Exercícios de escrita de código
// 3-

let idadeMesesDiasHoras = prompt("Insira sua idade em anos: ");
let idadeMes = idadeMesesDiasHoras * 12
let idadeDias = idadeMesesDiasHoras * 365
let idadeHoras = idadeDias * 24

console.log("Sua idade em meses é: ", idadeMes);
console.log("Sua idade em dias é: ", idadeDias);
console.log("Sua idade em horas é: ", idadeHoras);

// Exercícios de escrita de código
// 4- 

let insiraUmNumero = prompt("Insira o primeiro número: ");
let insiraOutroNumero = prompt("Insira o segundo número: ");

let maior = insiraUmNumero > insiraOutroNumero;
let igual = insiraUmNumero === insiraOutroNumero;
let divisivelPeloSegundo = ((insiraUmNumero % insiraOutroNumero) == 0)
let divisivelPeloPrimeiro = ((insiraOutroNumero % insiraUmNumero) == 0)

console.log("O primeiro numero é maior que segundo?", maior);
console.log("O primeiro numero é igual ao segundo?", igual);
console.log("O primeiro numero é divisível pelo segundo?", divisivelPeloSegundo);
console.log("O segundo numero é divisível pelo primeiro?", divisivelPeloPrimeiro);

// Desafios Opcionais

//mt dificil vou fazer n KKKKKKKKKKKK






