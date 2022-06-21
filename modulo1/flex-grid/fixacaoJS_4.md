```function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
    let qntdDeVezes = 0
    for(let numero of arrayDeNumeros) {
      if (numero === numeroEscolhido){
        qntdDeVezes ++
      }

    }
    if (qntdDeVezes > 0){
      return O número ${numeroEscolhido} aparece ${qntdDeVezes}x
    } else {
      return Número não encontrado
      }
}```