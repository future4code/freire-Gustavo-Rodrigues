// Exercícios de interpretação de código
// 1-
/*

let array
console.log('a. ', array) //Undefined

array = null
console.log('b. ', array) //null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) //11

let i = 0
console.log('d. ', array[i]) //3

array[i+1] = 19
console.log('e. ', array) // Array(11)

const valor = array[i+6]
console.log('f. ', valor) //9
*/

// Exercícios de interpretação de código
// 2-
/*

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

// SUBI NUM ÔNIBUS EM MIRROCOS 27 
// Está colocando todas as palavras em maiuscula, e substituindo todas letras...
// "A" por "I" e dando a quantidade de caracteres (contando com espaços).

*/

// Exercícios de escrita de código
// 1-

/*let nome = prompt("Digite seu nome: ");
let email = prompt("Digite seu email: ");

console.log(`O email ${email} foi cadastrado com sucesso. Seja bem-vindo(o), ${nome}.`);*/


// Exercícios de escrita de código
// 2-

/*let comidaPreferidas = ["lasanha", "bife", "pudim", "sorvete", "brocolis"];
console.log(comidaPreferidas);
console.log(`Essas são as minhas comidas preferidas:
 ${comidaPreferidas[0]}
 ${comidaPreferidas[1]}
 ${comidaPreferidas[2]}
 ${comidaPreferidas[3]}
 ${comidaPreferidas[4]}`);
 let comidaDoUsuario = prompt("Digite uma comida preferida: ");
 comidaPreferidas[1] = comidaDoUsuario
 console.log(comidaPreferidas);/*
 




// Exercícios de escrita de código
// 3-

/*let listaDeTarefas = []
let tarefasDoUsuario1 = prompt("Digite a tarefa numero 1: ");
let tarefasDoUsuario2 = prompt("Digite a tarefa numero 2: ");
let tarefasDoUsuario3 = prompt("Digite a tarefa numero 3: ");

console.log(tarefasDoUsuario1, tarefasDoUsuario2, tarefasDoUsuario3);

listaDeTarefas.push(tarefasDoUsuario1, tarefasDoUsuario2, tarefasDoUsuario3);

console.log(listaDeTarefas);

let tarefaRealizada = prompt ("Digite o indice de uma tarefa que você ja realizou 0, 1 ou 2")

listaDeTarefas.splice (tarefaRealizada,1);
console.log(listaDeTarefas);

// Desafio

let fraseDoUsuario = prompt("Escreva uma Frase: ");

let fraseUsuario2 = fraseDoUsuario.split(" ")


console.log (fraseUsuario2);
*/

function minhaFuncao(variavel) {
    return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))