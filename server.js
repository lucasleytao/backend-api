import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express() //passa express como uma funcao e utiliza todos os recursos do express

app.use(express.json()) //garante que o express utilize json

//endereco e tipo de rota

app.post('/usuarios', async (req, res) => { //cria um novo usuario
    // console.log(req.body) //busca os dados json de body
    // users.push(req.body) //salva dados do json na variavel users

    await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    res.status(201).send('Usuário criado com sucesso!')
})

app.get('/usuarios', async (req, res) => { //lista usuarios
    // res.send('Enviando resposta GET para o cliente') //metodo send() do express
    // console.log(req)

    let filter = []

    if (req.query) {
        filter = await prisma.user.findMany({
            where: {
                name: req.query.name, //retorna usuario onde name = req.query.name
                email: req.query.email,
                age: req.query.age
            }
        })
    } else {
        filter = await prisma.user.findMany()
    }

    // const allUsers = await prisma.user.findMany({

    // })

    // res.status(200).json(allUsers) //responde com json(todos os usuarios) rota de listagem
    res.status(200).json(filter) //responde com json(filtro de usuario)
})

app.put('/usuarios/:id', async (req, res) => { //cria um novo usuario
    // console.log(req.body) //busca os dados json de body
    // users.push(req.body) //salva dados do json na variavel users

    // console.log(req)

    await prisma.user.update({
        where: {
            id: req.params.id 
        },
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    res.status(201).json(req.body) //resposta do backend
})

app.delete('/usuarios/:id', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })
    res.status(200).send({message: 'Usuário deletado com sucesso!'})
})

app.listen(3000, () => {
    console.log('API rodando na porta 3000')
}) //informa qual porta do computador o server ira rodar

/* (request, response)
1. tipo de rota/ metodo HTTP
2. endereco (rota ou url)
*/

/*Crud
- criar um usuario
- listar todos os usuarios
- editar um usuario
- deletar um usuario
*/

/*
lucasleytao
3dtQE2dSVR94QOVH
*/
