const { DataTypes } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define('posts', {
        name:DataTypes.STRING,
        title: DataTypes.STRING,
        content :DataTypes.STRING,
        userId:DataTypes.INTEGER,
    }, { 
        //tableName:'userdata'
        updatedAt: 'updated_at',
        createdAt: 'created_at'
        // timestamps: false 
        //engine:MYISAM
    })
    return Posts;
}
