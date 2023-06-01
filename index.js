const express = require('express')
const app = express();
const IMCController = require("./controller/ImcController")
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(IMCController)


app.listen(3000, (error) => {
    if (!error)
        console.log('Start!')
    else
        console.log('Erro')
})

