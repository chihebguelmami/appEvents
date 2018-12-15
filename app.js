const express = require("express")
const app=express()
const db = require("./config/database")
//Extension par defaut des vus = ejs
app.set('view engine','ejs')

//dossier des données static
app.use(express.static('public'))
app.use(express.static('node_modules'))

app.get('/web',(req,res)=>{
	res.send("this is /web")
	})

//connect to db


const events = require('./router/event-routes')

app.use('/events',events)
const port=3000

app.listen(port,function(){
console.log("serv run ...")
})