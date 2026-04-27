// ========================================
// Aula 07 — Async/Await e JSON
// ========================================
// Implemente cada função abaixo.
// Rode os testes com: npx vitest run exercicios/aula07
// Não mexa no arquivo index.test.js.

// Exercício 1 — objetoParaJSON
export function objetoParaJSON(objeto) {
  // escreva seu código aqui
  const textoJSON = JSON.stringify(objeto);
  return textoJSON;
}

// Exercício 2 — jsonParaObjeto
export function jsonParaObjeto(texto) {
  // escreva seu código aqui
  const objeto = JSON.parse(texto);
  return objeto;
}

// Exercício 3 — clonarObjeto
export function clonarObjeto(objeto) {
  // escreva seu código aqui
  const objetoClone = structuredClone(objeto);
  return objetoClone;
}

// ──────────────────────────────────────────────────
// Função auxiliar — simula uma consulta ao banco que demora 100ms
// NÃO MEXA nesta função — ela já está pronta
// ──────────────────────────────────────────────────
function simularConsulta(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, nome: `Aluno ${id}`, cidade: 'Salinas' })
    }, 100)
  })
}

// Exercício 4 — buscarDados
export async function buscarDados(id) {
  // escreva seu código aqui
  const resultado = await simularConsulta(id);
  return resultado;
}

// Exercício 5 — dividirSeguro
export async function dividirSeguro(a, b) {
  // escreva seu código aqui
  try { 
    const alunoA = await buscarDados(a);
    const alunoB = await buscarDados(b);
    if (alunoB.id === 0) {
      throw new Error("Divisão por zero"); 
    }
    return alunoA.id / alunoB.id;
  } catch (erro) {
    throw new Error("Divisão por zero");
  }
}
