/**
 * Metacaracteres tipo Representante
 */

// Ponto
const frase = 'O casal que estava no casamento foram para casa juntos';
const reg_ponto = /casa./g;

// link para referencia função 'match' : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
const result_reg_ponto = frase.match(reg_ponto);

console.log({ result_reg_ponto });

// Lista

const palavras =
  'não fale nao teclado Teclado estendido extendido eztendido neo n-o';

const reg_lista_1 = /[ão]/g;
const result_reg_lista_1 = palavras.match(reg_lista_1);

console.log(result_reg_lista_1);
