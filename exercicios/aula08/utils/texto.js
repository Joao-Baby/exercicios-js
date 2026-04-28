// ========================================
// Aula 08 — Default Export
// ========================================
// Implemente a função e exporte com "export default".
export default function formatarNome(nome) {
  // escreva seu código aqui
  let caracterInicial = nome.charAt(0).toUpperCase();
  let outrosCaracter = nome.slice(1).toLowerCase();
  return caracterInicial + outrosCaracter;

}
