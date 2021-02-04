const express = require("express"); // import express
const app = express(); // init  express

// crinando rota raiz 

app.get("/", (req, res) => {
    res.send("<h1>Hello World!</h1>");
    // nao tem como enviar multiplas respostas
    // em uma rota só
});

// colocando "?" na frente do parametro da rota
// ele se torna um parametro nao obrigatorio
app.get("/blog/:artigo?", (req, res) => {
    let artigo = req.params.artigo
    if(!artigo){
        res.send("Welcome to my blog!");
    }else{
        res.send(`Welcome to my blog! <br> ${artigo}`);
    }
});


app.get("/ola/:nome/:empresa", (req, res) => {
    // req -> dados enviado pelo usuario
    // res -> resposta ao usuario
    let nome = req.params.nome;
    let empresa = req.params.empresa;
    res.send(`<h1>Oi, ${nome} do ${empresa} </h1>`);
});

app.get("/canal/youtube", (req, res) => {
    let canal = req.query["canal"];
    if(!canal){
        res.send(`Welcome to my channel`);
    }else{
        res.send(`Welcome to my channel: ${canal}`);
    }
});

app.listen(3333, (err) => {
    if(err){
        console.log(err);
    }else{
        console.log("Server started successfully")
    }
});