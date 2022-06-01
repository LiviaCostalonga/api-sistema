const Sequelize = require('sequelize');
const sequelize = new Sequelize({
dialect: 'sqlite',
storage: './storage/database.sqlite'
});

module.exports = sequelize;