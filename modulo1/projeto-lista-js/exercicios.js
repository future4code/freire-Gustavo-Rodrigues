// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  let altura = prompt("Digite a altura: ");
  let largura = prompt("Digite a largura: ");
  let soma = altura * largura
  console.log(soma);
}

// EXERCÍCIO 02
function imprimeIdade() {
  let anoAtual = prompt("Digite o ano atual: ");
  let anoNascimento = prompt("Digite o ano atual: ");
  let somaIdade = anoAtual - anoNascimento
  console.log(somaIdade);
}

// EXERCÍCIO 03
function calculaIMC(pesoKg, alturaMetros) {
  let imc = pesoKg / (alturaMetros * alturaMetros);
  return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  let nome = prompt("Digite seu nome: ");
  let idade = prompt("Digite sua idade: ");
  let email = prompt("Digite seu email: ");
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`);
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let corFavorita1 = prompt("Digite sua primeira cor favorita: ");
  let corFavorita2 = prompt("Digite sua segunda cor favorita: ");
  let corFavorita3 = prompt("Digite sua terceira cor favorita: ");
  let coresFav = [corFavorita1, corFavorita2, corFavorita3]
  console.log(coresFav);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase();
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  let valorIng = custo / valorIngresso
  return valorIng;
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  let checkstring = string1.length===string2.length
  return checkstring;
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
   let ultimoElemento = array.length-1;
   return array [ultimoElemento];
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  let ultimoItem = array[array.length-1];
  let primeiroItem = array[0];
  array[array.length-1] = primeiroItem;
  array[0] = ultimoItem
  return array;
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  let checaIgual = string1.toLowerCase()===string2.toLowerCase();
  return checaIgual;
}

// EXERCÍCIO 13
function checaRenovacaoRG() {

  let anoAtual = Number(prompt("Qual o ano atual: "));
  let anoDeNascimento = Number(prompt("Qual seu ano de nascimento: "));
  let AnoRg = Number(prompt("Ano em que seu RG emitido: "));
  let idade = anoAtual - anoDeNascimento;
  let identidade = anoAtual - AnoRg;
  let PessoasMenos20 = idade <= 20 && identidade >= 5;
  let pessoas20a50 = idade > 20 && idade <= 50 && identidade >= 10;
  let pessoasAcima50 = idade > 50 && identidade >= 15;

  console.log(PessoasMenos20 || pessoas20a50 || pessoasAcima50);

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  let anoBi = ano % 400 === 0;
  let anoBi1 = ano % 4 === 0 && ano % 100 !== 0;

  return anoBi || anoBi1
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {

  let temMais18 = prompt("Você é maior de idade? ");
  let ensinoMedio = prompt("Você possui ensino médio completo? ");
  let disponibilidadeExc = prompt("Você possui disponibilidade exclusiva durante os horários do curso?");
  let resultado = temMais18 == "sim" && ensinoMedio == "sim" && disponibilidadeExc =="sim";

  console.log(resultado);
}