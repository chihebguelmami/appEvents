const mongoose=require('mongoose')
mongoose.connect("mongodb://localhost:27017/mydb",(eror)=>{
	if(eror)
		console.log("connecting to the db failed : ",eror)
	else
		console.log("connected to the db ! ")
})