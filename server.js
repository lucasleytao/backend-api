import express from 'express'

const app = express() //passa express como uma funcao e utiliza tudo do express
app.use(express.json()) //garante que o express utilize json

const users = []

app.post('/usuarios', (req, res) => { //cria um novo usuario
    // console.log(req.body) //busca os dados json de body
    users.push(req.body) //salva dados do json na variavel users
    res.send('Enviando resposta POST')
})

app.get('/usuarios', (req, res) => { //lista usuarios
    // res.send('Enviando resposta GET para o cliente') //metodo send() do express
    res.json(users) //responde com json(todos os usuarios)
})

app.listen(3000) //informa qual porta do computador o server ira rodar

/* (request, response)
1. tipo de rota/ metodo HTTP
2.
*/
