const {Sequelize, DataTypes} = require('sequelize')
const fs = require('fs');
let database = 'world'
let database_username = 'root'
let database_password = 'admin'
const sequelize = new Sequelize(
    `${database}`,
    `${database_username}`,
    `${database_password}`,
    {
        host: 'localhost',
        dialect: 'mysql',
        logging: async (msg) => {
            fs.appendFile('./data.txt', `${new Date() + msg} \n` , () => {})
        },
        pool: { max: 5, min: 0, idle: 10000 }
    }
)

sequelize.authenticate().then(() => {
    console.log(`CONNECTING TO DB SUCCESSFULL`)
}).catch(error => {
    console.log(`CONNECTING TO DB FAILED`, error)
})

var db = {}
db.sequelize = sequelize
db.Sequelize = Sequelize
db.users = require('../models/users')(sequelize, DataTypes)

db.sequelize.sync({force:false}).then(() =>{
    console.log('DB Synced')
})
module.exports = db
