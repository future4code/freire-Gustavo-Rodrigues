/*
Exercicio 1: Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

let a = 10
let b = 10

console.log(b) // O valor de b é igual a 10

b = 5 // o valor de b foi alterado pra 5
console.log(a, b) // O valor de a ficou: 10, e o valor de b: 5. 
*/
//----------------------------------------------------------------------------------------------------
/*

Exercicio 2: Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c) // Será impresso: 10, 10, 10

*/

//----------------------------------------------------------------------------------------------------



//Exercicio 3: Analise o programa abaixo, entenda o que ele faz e sugira melhores nomes para as...

/* 

let horasDeTrabalho = prompt("Quantas horas você trabalha por dia?")
let valorPorDia = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

*/

//---------------------------------------------------------------------------------------------------------




//1- Exercícios de escrita de código:

/* 

nome =
console.log(typeof nome);

idade =
console.log(typeof idade); 

Foi impresso undefined porque não declaramos nenhum valor da variavel então ele mostra "indefinido".

*/

let nome = (prompt("Qual seu nome?"));
let idade = (prompt("Qual sua idade? "));

console.log("Olá", nome, "você tem", idade, "anos");

//-------------------------------------------------------------------------------------------------------

//2 -

let corDaRoupa = ("Voce esta usando roupa verde?");
let gostaDeMatematica = ("Você gosta de matemática?");
let gostaDeGatos = ("Você gosta de gatos?");

let respostaRoupa = ("Sim");
let respostaMatematica = ("não");
let respostaGatos = ("Sim");

console.log(corDaRoupa, respostaRoupa);
console.log(gostaDeMatematica, respostaMatematica);
console.log(gostaDeGatos, respostaGatos);

//-----------------------------------------------------------------

 // 3-

 let a = 10
 let b = 25
 
 c = a
 a = b
 b = c

 

 // Depois de trocados, teremos o seguinte resultado:

 console.log("O novo valor de a é", a) // O novo valor de a é 25
 console.log("O novo valor de b é", b) // O novo valor de b é 10




// Desafio extra

let numero1 = prompt("Insira o primeiro numero: ");
let numero2 = prompt("Insira o segundo numero: ");

let numero11 = Number(numero1);
let numero22 = Number(numero2);
let soma = numero11 + numero22-

let somaMultiplicacao = Number(numero1 * numero2);

console.log("O primeiro número somado ao segundo número resulta em: ", soma);
console.log("O primeiro número multiplicado pelo segundo número resulta em: ", somaMultiplicacao)



