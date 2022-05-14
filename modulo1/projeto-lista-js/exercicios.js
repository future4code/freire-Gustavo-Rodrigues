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
  // implemente sua lógica aqui

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

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