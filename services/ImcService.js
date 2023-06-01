const indices = require('../model/indices')

function CalcularIMC(altura, peso) {
    return peso / altura ** 2;
}

function StringIMC(imc) {
    return indices.find(x => x.initial <= imc && x.end > imc).mensagem
}

module.exports = { CalcularIMC, StringIMC }