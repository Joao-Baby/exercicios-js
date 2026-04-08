// ========================================
// Aula 05 — Fundamentos de JavaScript
// ========================================
// Implemente cada função abaixo.
// Rode os testes com: npx vitest run exercicios/aula05
// Não mexa no arquivo index.test.js.

// Exercício 1 — classificarIdade
export function classificarIdade(idade) {
  // escreva seu código aqui
  if(idade < 12){
    return "criança";
  }
  else if(idade < 18){
    return "adolescente"
  }
  else {
    return "adulto"
  }
}

// Exercício 2 — calcularDesconto
export function calcularDesconto(preco, percentual) {
  // escreva seu código aqui
  return preco - ((percentual / 100) * preco);
}

// Exercício 3 — verificarAprovacao
export function verificarAprovacao(nota) {
  // escreva seu código aqui
  if(nota >= 60){
    return "aprovado";
  }
  else if(nota >= 40){
    return "recuperação";
  } 
  else{
    return "reprovado";
  }
}

// Exercício 4 — somarPares
export function somarPares(numeros) {
  // escreva seu código aqui
  let soma = 0;
  for(const numero of numeros){
    if(numero % 2 === 0){
      soma += numero;
    }
  }
  return soma;
}

// Exercício 5 — contarLetra
export function contarLetra(texto, letra) {
  // escreva seu código aqui
  let numLetra = 0;
  for(const carracter of texto){
    if(carracter === letra){
      numLetra += 1;
    }
  }
  return numLetra;
}
