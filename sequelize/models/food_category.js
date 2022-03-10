const {Sequelize, DataTypes} = require('@sequelize/core');
const sequelize = require('../database')
const Food_category = sequelize.define("food_category", {
    color: {
        type: DataTypes.STRING,
       
    },
    name : {
        type: DataTypes.STRING
    },
    type :{
        type : DataTypes.INTEGER
    },
   
},
{freezeTableName : true,
timestamps : false})
async () => {
    await Food_category.sync({alter: true});
}
module.exports = Food_category;