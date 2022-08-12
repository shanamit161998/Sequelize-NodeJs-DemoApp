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
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: true
        },
        createdBy: {
            type: DataTypes.STRING,
            allowNull: true
        },
        updatedBy: {
            type: DataTypes.STRING,
            allowNull: true
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
