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

function middleware  (req, res,next){
    console.log("Hye this is middleware")
    next()
}

app.use(middleware)

app.get("/",middleware,(req,res)=>{
    res.send("Hye this is the GET Request")
})

app.get("/",(req, res)=>{
    res.send("Hye this is the GET Request")
})

app.get("/test",middleware,(req,res)=>{
    res.send("Hye this is the TEST Request")
})

app.post("/",(req,res)=>{
    res.send("Hye this is the POST Request")
})

app.put("/",(req,res)=>{
    res.send("Hye this is the PUT Request")
})

app.delete("/",(req,res)=>{
    res.send("Hye this is the DELETE Request")
})


const PORT = 3500
app.listen(PORT,()=>console.log(`server is running at ${PORT}`))