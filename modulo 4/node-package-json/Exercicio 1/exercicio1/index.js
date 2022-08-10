// A- Usando o process.argv [0] com argumento dentro 1,2,3,4...

const nome = process.argv[2]

const age = Number(process.argv[3] + 7)

console.log(`Olá, ${process.argv[2]} Você tem ${process.argv[3]} anos. em sete anos você terá ${age}`)