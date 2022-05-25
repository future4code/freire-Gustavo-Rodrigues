// Exercícios de interpretação de código
// 1-
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })

// A- Imprime o Array no console mostrando todas as informações

// -----------------------------------------------------------------------------
// Exercícios de interpretação de código
// 2-

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)

// A - Ele so vai mostrar o novo array contendo os nomes e a quantidade de indice.

// -----------------------------------------------------------------------------
// Exercícios de interpretação de código
// 3- 

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)

// A - Ele imprimiu apenas o array do primeiro e do segundo item porque são diferentes de chijo.

// -----------------------------------------------------------------------------
// Exercícios de escrita de código
// 1- 

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

// A- 
//  const nomes = pets.map((pet) => {
//      return pet.nome
//  })
//  console.log(nomes);
 
// B-
//  const nomesSalsicha = pets.filter((pet) => {
//     return pet.raca === "Salsicha"
// })
// console.log(nomesSalsicha);

// C- 
// Não consegui.

// -----------------------------------------------------------------------------
// Exercícios de escrita de código
// 2- 
//  const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]

 // A -
//  const nomeItens = produtos.map((item) => {
//      return item.nome
//  })
//  console.log(nomeItens);

 // B -
//  const precoDesconto = produtos.map((item) => {
//      return {produt: item.nome, preço: item.preco * 0.95}
//  })

//  console.log(precoDesconto)

 // C - Não consegui resolver as dsemais questões.











