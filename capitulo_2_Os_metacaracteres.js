/**
 * Metacaracteres tipo Representante
 */

function return_reg_match(frase, reg) {
  // link para referencia função 'match' : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match

  return console.log(
    ` Frase: "${frase}"\n Reg: ${reg}\n Resultado: ${frase.match(reg)}\n`
  );
}

// Ponto
const frase = 'O casal que estava no casamento foram para casa juntos';
const reg_ponto = /casa./g;
return_reg_match(frase, reg_ponto);

// Lista

const palavras =
  'não fale nao teclado Teclado estendido extendido eztendido neo n-o';

const reg_lista_1 = /n[ãa]o/g;
return_reg_match(palavras, reg_lista_1);
