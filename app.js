const express = require('express')
const app = express()

const port = 8080;
global.db = require('./connection/index')
const userCtrl = require('./controllers/userController');

app.get("/", (req, res) =>{
    res.send("HomePage");
})

app.get('/add', userCtrl.addUser)
app.get('/crud', userCtrl.crudOperation)
app.get('/query', userCtrl.queryOperation)



app.listen(port , () => {
    console.log(`App listening on http://localhost:${port}`)
})