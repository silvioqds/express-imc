const express = require('express')
const router = express.Router();
const { StringIMC, CalcularIMC } = require('../services/ImcService')

router.post('/calculate', (req, res) => {
    const { altura, peso } = req.body

    if (!altura || !peso) {
        res.status(400).json({ message: "Necessário informar os valores de altura e peso" })
        return
    }

    const imc = CalcularIMC(altura, peso)
    res.status(200).json({ altura: altura, peso: peso, imc: imc, status: StringIMC(imc) })
})

module.exports = router