import "reflect-metadata";
import express from "express"; 
import"./database";

const app = express();

app.get("/viagens", (request, response)  => {
    
    return response.send("teste funcionando")
});

app.post("/viagens", (request, response) => {

    return response.send("passagens")
});

app.listen(3000, () => console.log("server rodando"));

