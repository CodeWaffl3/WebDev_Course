const express = require("express");
const app = express();
const https = require("https");

app.use(express.json());
app.use(express.urlencoded({ extended:true}));
app.use(express.static("public"));

//This could be use with MONGO this is a simultaion of the usage

const userDB = [
    {
        user:"admin",
        password:"password",
        name:"Gandalf",
        lastName: "The grey",
        oicture: "https://static.wikia.nocookie.net/eldragonverde/images/4/47/Gandalf.png/revision/latest?cb=20121217202035&path-prefix=es",
        tasks: ["create users","update password","Maintain data integrity"],
        date_create: "23-02-2019"
    },
    {
        user:"Master",
        password:"hello there",
        name:"Obi-Wan",
        lastName: "Kenobi",
        oicture: "https://phantom-marca.unidadeditorial.es/a12ae8bfd4cbe2bbec80cc9c70ea6301/resize/1320/f/jpg/assets/multimedia/imagenes/2022/05/26/16535796722201.jpg",
        tasks: ["Use the force","Being sassy","Teaching the force"],
        date_create: "23-05-2022"
    }
]

/*app.get("/login",(req,res)=>{
    var p_user = req.query.user;
    var p_pass = req.query.pass;
    var user = userDB.find((user) =>{
        return user.user === p_user
    });
    if(typeof user !== "undefined"){
        if (user.password === p_pass){
            res.json(user);
        }
        else {
            res.json("Wrong password, sugma");
        }
    }
    else{
        res.json({error: "Unknown user",
                        message: "User not found"
        })
    }
});*/

app.post("/login",(req,res)=>{
    var p_user = req.body.user;
    var p_pass = req.body.pass;
    var user = userDB.find((user) =>{
        return user.user === p_user
    });
    if(typeof user !== "undefined"){
        if (user.password === p_pass){
            res.json(user);
        }
        else {
            res.json("Wrong password, sugma");
        }
    }
    else{
        res.json({error: "Unknown user",
                        message: "User not found"
        })
    }
});

app.listen(5000,()=> {
    console.log("Example listening in port 5000");
})