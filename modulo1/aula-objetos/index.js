// 1- Exercícios de interpretação de código
// A -
// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])
// Será impresso Matheus Nachtergaele, Virginia Cavendish, canal: 'Globo', horario: '14h'!

// ---------------------------------------------------------------------------------------

// 2- Exercícios de interpretação de código 

// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

// A - Será impresso: {nome: 'Juca', idade: 3, raca: 'SRD'} 3x um abaixo do outro.
// B - Ele faz um espelhamento e trocou o de Juca pra Juba

// --------------------------------------------------------------------------------

// 2- Exercícios de interpretação de código

//  function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

// A - 
// B - Altura deu infeninido porque não foi declarado no código

// --------------------------------------------------------------------------------

// 1- Exercícios de escrita de código

// const pessoa = {
//     nome: "Gustavo",
//     apelidos: ["Gu", "Guga", "Gus"]
// }

// function pessoaApelidos (apelidosFofos) {
//     console.log(`Eu sou ${apelidosFofos.nome}, mas pode me chamar de ${apelidosFofos.apelidos[0]}, ${apelidosFofos.apelidos[1]}, ou ${apelidosFofos.apelidos[2]}.`);
// }

// pessoaApelidos(pessoa);

// const novaPessoa = {
//     ...pessoa, 
//     apelidos: ["Gux", "Gugax", "Gusx"]
// }
// pessoaApelidos(novaPessoa);

// // 2- Exercícios de interpretação de código

// const objetoPessoas = {

// }

// 2- Exercícios de escrita de código

// const pessoa = {
// 	nome: "Bruno", 
//     idade: 23, 
// 	profissao: "Instrutor"
// }

// const pessoa2 = {
// 	nome: "Gustavo", 
//     idade: 25, 
// 	profissao: "professor"
// }

// function minhaFuncao(pessoa, pessoa2) {
//     const novaPessoa = {
//         ...pessoa,
//         ...pessoa2,

//     }
//     const finalPessoa = [novaPessoa.nome, novaPessoa.nome.length, novaPessoa.idade, novaPessoa.profissao, novaPessoa.profissao.length]
//     return finalPessoa;
    
// }
// console.log(minhaFuncao(pessoa));

// 3- Exercícios de escrita de código

// carrinho = []

// let fruta1 = {
//     nome: "morango",
//     disponivel: true
// }
// let fruta2 = {
//     nome: "Pêra",
//     disponivel: true
// }

// let fruta3 = {
//     nome: "Uva",
//     disponivel: true
// }


// function sacolao(fruta){
//     const sacolaFrutas = {
//         ...fruta1,
//         ...fruta2,
//         ...fruta3
//     }
// carrinho = [fruta1, fruta2, fruta3];
// return carrinho;
// }

// console.log(sacolao(carrinho.fruta));



const checaNumeros = (num1, num2) => {
   if (num1 > num2) {
      console.log("O primeiro numero é maior que o segundo.");
   } else if (num1 < num2) {
      console.log("O primeiro numero é menor que o segundo.");
   } else {
      console.log("Os 2 numeros são iguais.");
   }
}

let digite1 = Number(prompt("Digite o primeiro numero: "));
let digite2 = Number(prompt("Digite o segundo numero: "));

checaNumeros(digite1, digite2);

