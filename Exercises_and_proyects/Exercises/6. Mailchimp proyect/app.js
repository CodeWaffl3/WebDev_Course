const express = require("express");
const app = express();
app.use(express.static("public"))
//app.engine("ejs", require("ejs").renderFile);
app.set("view engine","ejs");


app.get('/',(req,res) =>{
    res.render("signup");
});

app.listen(3000, () =>{
    console.log("Example app listening on port 3000");
});