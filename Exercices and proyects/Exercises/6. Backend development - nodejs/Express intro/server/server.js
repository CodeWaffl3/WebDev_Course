const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get('/',(req,res) =>{
	res.send("hello world");
});

app.get('/students',(req,res) =>{
	var name = req.body.name;
	res.send("Students");
});

app.listen(3000, ()=>{
	console.log("Example app listening on port 3000");
});