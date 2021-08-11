let express = require("express")
let notes = require("./data/notes")
let dotenv = require("dotenv")
let connectDb = require("./config/db")

let app = express()
dotenv.config()
connectDb()
app.get("/",(req,res)=>{
  res.send("<h1>API started</h1>")
})

app.get("/api/notes",(req,res)=>{
   res.json(notes)
})

app.get("/api/notes/:id",(req,res)=>{
  let note = notes.find((individual)=>individual._id===req.params.id)
  // console.log(note);
  res.send(note)
  
})
const PORT = process.env.PORT||3000
app.listen(PORT,()=>{console.log(`Listening to port ${PORT}`)})