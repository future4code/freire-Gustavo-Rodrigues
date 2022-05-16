// Exercicio 1
// Crie uma função que
// receba um nome
// imprima no console a frase `olá [nome]`
// invoque com 3 nomes diferentes

/*function imprimirSaudacao (nome){
    console.log(`Oi, ${nome}`);
}

imprimirSaudacao("Gustavo");
imprimirSaudacao("Lorran");
imprimirSaudacao("Julia");*/

// ex 2

/*function saudacao(){
    let nome = prompt("Qual seu nome?");
    let idade = prompt("Qual sua idade?");
    return `Olá ${nome}, sua idade é ${idade} anos.`
}

let resposta = saudacao()

console.log("resposta", resposta)*/

//--------------------------------------------------------------------------------------------

// Exercícios de interpretação de código
// 1-

//function minhaFuncao(variavel) {
//	return variavel * 5
//}
//
//minhaFuncao(2)
//minhaFuncao(10)

// A- Sera impresso o valor resultante de 5*2 e 5*10 que no caso é 10 e 50.
// B- Vai mostrar "Expression Not availabre"

//--------------------------------------------------------------------------------------------

// Exercícios de interpretação de código
// 2-

//let textoDoUsuario = prompt("Insira um texto");

//const outraFuncao = function(texto) {
//	return texto.toLowerCase().includes("cenoura")
//}

//const resposta = outraFuncao(textoDoUsuario)
//console.log(resposta);

// A- Ela coloca toda a frase que o usuario digitou e verifica se contem a palavra "cenoura"
// caso ter a palavra imprime True, caso não ter retorna False.
// B - True / True / True

//--------------------------------------------------------------------------------------------

// Exercícios de escrita de código
// 1- 

function nomeIdadeCidade () {
    console.log("Eu sou Gustavo, tenho 22 anos, moro em São Paulo e sou estudante.");
    
}

nomeIdadeCidade();

function infoUsuario (nome, idade, endereco, profissao) {
    return `Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}.`
}

console.log(infoUsuario("Gustavo", 22, "endereco", "estudante"));

// Exercícios de escrita de código
// 2- 

// A -
function numerosPar (num1 = 10, num2 = 20) {
     return num1 + num2
}

console.log(numerosPar(50, 40));

// B - 
function numeros (num1, num2){
    console.log(num1 >= num2)
}
numeros(10, 5)

// C -
function parImp (num){
    return num % 2 == 0
}

console.log(parImp(10))

// D -
function msgString (mensagem) {
    console.log(`${mensagem.length}, ${mensagem.toUpperCase()}`)
}

msgString("Oi tudo bem Gustavo");

// Exercícios de escrita de código
// 3 - 

function soma (num1, num2) {
    return num1 + num2
}

function sub (num1, num2) {
    return num1 - num2
}

function multi (num1, num2) {
    return num1 * num2
}

function divi (num1, num2) {
    return num1 / num2
}

let numeroUsuario = Number(prompt("Digite o primeiro numero: "));
let numeroUsuario2 = Number(prompt("Digite o segundo numero: "));

console.log(`Numeros inseridos ${numeroUsuario} e ${numeroUsuario2}
Soma: ${soma(numeroUsuario, numeroUsuario2)}
Diferença: ${sub(numeroUsuario, numeroUsuario2)}
Multiplicação: ${multi(numeroUsuario, numeroUsuario2)}
Divisão: ${divi(numeroUsuario, numeroUsuario2)}`);








