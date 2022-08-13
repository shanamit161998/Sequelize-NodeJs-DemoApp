const { DataTypes } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('users', {
        userId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
            // set(value){
            //     this.setDataValue('name', value + ' SINGH')
            // },
            // get(value){
            //     console.log(value)
            //     this.getDataValue('name', value + ' SINGH')
            // }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            set(value) {
                this.setDataValue('name', value + '@yahoo.com')
            }
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            validate: {
                equals: 'male'
            }

        },
        createdBy: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: ''

        },
        updatedBy: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: ''
        },
        active: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        }
    }, {
        //tableName:'userdata'
        //updatedAt: false
        //createdAt: false
        timestamps: false
        //engine:MYISAM
    })
    return Users;
}
