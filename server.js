const express = require("express")

const app = express()



app.use(express.static("public"))






app.get("/", (req,res,next)=>{
	res.send(`here`)
})




app.listen(3000,() => {
	console.log(`server listening @ port 3000`);
})