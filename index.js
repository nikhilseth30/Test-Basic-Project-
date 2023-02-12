const express= require('express')
const uuid = require('uuid')
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

app.use(express.json())

app.get("/showAllUser",(req,res)=>{
    res.status(200).json(members)
})

app.get("/showUser/:uid",(req,res)=>{
    const id = req.params.uid
    const user = members.filter(member => member.id === parseInt(id))
    user.length !==0 ? res.status(200).json(user) : res.status(200).json({msg:"user not found"})
    // console.log(req.params.uid)
})

app.post("/addUser/", (req,res)=>{
    // const name = req.body.name
    // const email = req.body.email
    // const password = req.body.password
    const{name,email,password} = req.body // shortcut method
    members.push({id:uuid.v4(),name,email})
    res.status(200).json(members)
})  



const PORT = process.env.PORT || 3500
app.listen(PORT,()=>console.log(`server is running at ${PORT}`)) 