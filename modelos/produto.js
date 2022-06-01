const Sequelize = require('sequelize');
const database = require('../db/storage/database');

const Produto = database.define('produto', {
    id: {
        type: Sequelize.INTEGER, //tipo da variavel
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false //se pode deixar vazio
    },
    preco: {
        type: Sequelize.DOUBLE
    },
    descricao: Sequelize.STRING  
});

module.exports = Produto; 