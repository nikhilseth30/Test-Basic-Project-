// const express = require('express')
// const path = require('path')
// const app = express()


// app.use(express.static(path.join(__dirname,'public')))

// app.get("/test",(req,res)=>{
//     res.send("<h1>Hello World</h1>")
// })

// const PORT = 8500
// app.listen(PORT,()=> console.log(`server is running at ${PORT}`))


const express= require('express')
const app = express()

const members = [{
    id : 1,
    name : "louis",
    email: "louis@gmail.com",
    status :"active"

},{
    id : 2,
    name : "nikhil",
    email: "nikhil@gmail.com",
    status :"inactive"
},{
    id : 3,
    name : "shivanshu",
    email: "shivanshu@gmail.com",
    status :"active"
},{
    id : 4,
    name : "vedant",
    email: "vedamt@gmail.com",
    status :"active"
}]

app.get("/showAllUser",(req,res)=>{
    res.status(200).json(members)
})

// app.get("/showUser/:id",(req,res)=>{
//     console.log(req.params.id)
// })

app.get("/showUser/:uid",(req,res)=>{
    const id = req.params.uid
    const user = members.filter(member => member.id === parseInt(id))
    user.length !==0 ? res.status(200).json(user) : res.status(200).json({msg:"user not found"})
    // console.log(req.params.uid)
})

const PORT = 3500
app.listen(PORT,()=>console.log(`server is running at ${PORT}`))