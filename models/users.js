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
            defaultValue:''
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue:''

        },
        gender: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue:''

        },
        createdBy: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue:''

        },
        updatedBy: {
            type: DataTypes.STRING,
            allowNull: true, 
            defaultValue:''
        },
    }, { 
        //tableName:'userdata'
        //updatedAt: false
        //createdAt: false
        timestamps: false 
        //engine:MYISAM
    })
    return Users;
}
