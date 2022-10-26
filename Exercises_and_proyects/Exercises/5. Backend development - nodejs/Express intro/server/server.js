const express = require("express");
const app = express();
const https = require("https");


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.engine("ejs",require("ejs").renderFile);
app.set("view engine","ejs");





let items = [];

app.get('/',(req,res) =>{
	res.sendFile(__dirname + "/public/html/index.html");
	//res.render("welcome",{items: items});
});


app.get('/students',(req,res) =>{
	var name = req.body.name;
	res.send("Students");
});



app.get("/welcome", (req,res) => {
	var myName = req.query.name;
	res.send("Hello " + myName);
});

app.post("/welcome", (req,res) => {
	var myName = req.body.name;
	res.send("Hello Secure" + myName);
});

app.get("/welcome/:name", (req,res) => {
	var myName = req.params.name;
	res.send("URL hello" + myName);
});

app.post("/ejsWelcome", (req,res) => {
	var myName = req.body.name;
	res.render("test", {userName: myName});
});

app.post("/addLink", (req,res) => {
	var newItem = req.body.item;
	items.push(newItem);
	res.render("Welcome", {items: items})
});

app.get("/weather", (req,res) => {
	var url = "https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&APPID=ffe2572dc7943ae8521911cd64b9ea09";

	https.get(url,(response) => {
		if (response.statusCode == 200) {
			response.on("data",(data)=>{
				var jsonResp = JSON.parse(data);
				console.log(jsonResp);
				var msg = "Wheater at " + jsonResp["name"];
				console.log(msg);
				res.write("Connection success" + msg + "\n");
				res.write("Humidity: " + jsonResp["main"]["humidity"] + "\n");
				res.write("Temp: " + jsonResp["main"]["temp"] + "\n");
				res.send();
			}).on("error",(e) => {
				res.write("Error on process");
				console.log("Error {$e.message}");
			});
		}
		else {
			res.write("Connection failed");
			res.send();
		}
		//console.log(response);
	});
});


app.listen(3000, ()=>{
	console.log("Example app listening on port 3000");
});

