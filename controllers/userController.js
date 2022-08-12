const db = require("../connection")


const addUser = async (req, res) => {
   /* let instance = await db.users.build({name:'Amit', email:'shanamit93@gmail.com', gender:'male', createdBy:'user1'})
    await instance.save() */
    //build & save in built
    let data = await db.users.create({name:'Shanbhag', email:'shanamit13@gmail.com', gender:'male', createdBy:'user1'})

    let response = {
        data
    }
    res.status(200).json(response)
}

module.exports= {addUser}