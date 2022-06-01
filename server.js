const express =  require('express');
const database = require('./db/storage/database');
const produtoRouter = require('./rotas/produto');

//Iniciando conexão com o banco de dados 
try {
    const resultado = database.sync();
    console.log(resultado);
} catch (error) {
    console.log(error);
}

//Iniciando aplicação web para API
const app = express();
const porta = 3000;

//Configurando Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(porta, () => {
    console.log(`Servidor iniciado e ouvindo na porta ${porta}`);
});

app.use('/produto', produtoRouter)

