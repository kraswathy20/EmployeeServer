const express=require('express')
// to create server we use express method
const server=express()
// lib used to connect FE with server -- cors
// import cors
const cors= require('cors')

const logic=require('./service/logic')
// connect with FE
server.use(cors({origin:'http://localhost:3000'}))

server.use(express.json())

// port setting

server.listen(8000,()=>{
    console.log("server started at port 8000");
})


server.get('/getAllEmployee',(req,res)=>{
    logic.allEmployee().then(result=>{
        res.status(result.statusCode).json(result)
    })
})

server.delete('/deleteEmployee/:id',(req,res)=>{
    logic.removeEmployee(req.params.id).then(result=>{
        res.status(result.statusCode).json(result)
    })
})

server.post('/addEmployee',(req,res)=>{
    logic.addEmployee(req.body.id,req.body.uname,req.body.age,req.body.designation,req.body.salary)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})