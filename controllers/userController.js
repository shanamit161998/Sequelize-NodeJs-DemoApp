const { Op } = require("sequelize")
const  db = require("../connection")


const addUser = async (req, res) => {
    /* let instance = await db.users.build({name:'Amit', email:'shanamit93@gmail.com', gender:'male', createdBy:'user1'})
     await instance.save() */
    //build & save in built
    let data = await db.users.create({ name: 'Shanbhag', email: 'shanamit13@gmail.com', gender: 'male', createdBy: 'user1' })

    let response = {
        data
    }
    res.status(200).json(response)
}

const crudOperation = async (req, res) => {
    let data = await db.users.create({ name: 'new', email: 'Demo@gmail.com', gender: 'male', createdBy: 'user1' })

    let update = await db.users.update({ name: 'DataUpdate', updatedBy: 'MEIN' }, { where: { userId: 1 } });
    let del = await db.users.destroy({
        where: {
            userId: 7
        }
    });
    let response = {
        data: data,
        update,
        del
    }

    //truncate:true used when destory 
    //bulkCreate array type push
    //findAll 
    //findOne

    res.status(200).json(response)
}

const queryOperation = async (req, res) => {
    /*Particular  field insert*/
    let data = await db.users.create({ name: '', email: 'Dem11o99@gmail.com', gender: 'male', createdBy: 'user1' }, {fields:['email']})


    //FIND ALL 
    let data1 = await db.users.findAll({
        attributes:[
            'name',  //GET ONLY NAME
            ['email', 'EmailId'],  // EMAIL AS EMAILID
            [db.Sequelize.fn('Count', db.Sequelize.col('email')), 'emailCount']
        ]
    })


    //EXCLUDE AND INCLUDE
    let data2 = await db.users.findAll({
        attributes:{
            exclude:['createdBy', 'updatedBy'],
            include:[
                [db.Sequelize.fn('CONCAT',db.Sequelize.col('email'), ' SINGH'), 'fullName']
            ]
        }
    })

    //CONDITION
    let data3 = await db.users.findAll({
        where:{
            userId:{
                [Op.eq]:2
            }
        }, 
        order:[
            ['name', 'DESC']
        ], 
        limit:2,
        offset:0, 
        group:['name']
    })
    let response = {
        data: data,
        data1,
        data2, 
        data3
    }
    res.status(200).json(response)

}

module.exports = { addUser, crudOperation, queryOperation }