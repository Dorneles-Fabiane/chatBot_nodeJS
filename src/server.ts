import  express from 'express';

const app = express();

app.listen(3333, () => 
 console.log("Server is running on port 3333"));

app.get("/", (request, response) => {
    return response.json({
        "message": "Olá NLW 05",
    });
});

app.post("/", (request, response) => {
    return response.json({
        "message": "Usuário salvo com sucesso"
    });
});



