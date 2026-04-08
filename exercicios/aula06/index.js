// ========================================
// Aula 06 — Funções e Arrays
// ========================================
// Implemente cada função abaixo.
// Rode os testes com: npx vitest run exercicios/aula06
// Não mexa no arquivo index.test.js.

// Exercício 1 — criarSaudacao
export function criarSaudacao(nome) {
  // escreva seu código aqui
  return `Olá, ${nome}!`;
}

// Exercício 2 — filtrarAprovados
export function filtrarAprovados(alunos) {
  // escreva seu código aqui
  const aprovados = alunos.filter((aluno) => aluno.nota >= 60);
  return aprovados;
}

// Exercício 3 — extrairNomes
export function extrairNomes(alunos) {
  // escreva seu código aqui
  const nomes = alunos.map((aluno) => aluno.nome);
  return nomes;
}

// Exercício 4 — buscarAluno
export function buscarAluno(alunos, nome) {
  // escreva seu código aqui
  const pessoa = alunos.find((aluno) => aluno.nome === nome);
  return pessoa;
}

// Exercício 5 — calcularMedia
export function calcularMedia(notas) {
  // escreva seu código aqui
  let mediaAritimetica = 0;
  if(notas.length === 0){
    return 0;
  }
  for(const nota of notas){
    mediaAritimetica += nota;
  }
  return mediaAritimetica / notas.length;
}
