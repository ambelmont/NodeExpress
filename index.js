const express = require("express")
const res = require("express/lib/response")

const server = express()

const usuarios = [{id:1, nome:"Amanda", sobrenome: "Carvalho"}, 
{id:2, nome:"Isabella", sobrenome: "Santos"}]



server.get("/usuarios", (req, res) => {
    res.send(usuarios)
}) 

server.get("/usuarios/:id", (req, res) => {
    const {id} = req.params
    const aux =usuarios.find((usuario) => usuario.id == id)
    res.send(aux)
})    
 
console.log("O servidor está rodando")

server.listen(3000)