const {Sequelize, DataTypes} = require('@sequelize/core');
const sequelize = require('../database')
const Food = sequelize.define("food", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price : {
        type: DataTypes.INTEGER
    },
    portion :{
        type : DataTypes.INTEGER
    },
    stock : {
        type : DataTypes.INTEGER
    },
    discount : {
        type : DataTypes.INTEGER
    },
    recipe : {
        type : DataTypes.STRING
    },
   categoryId : {
       type : DataTypes.INTEGER
   }
   
},{
    timestamps : false
})
async () => {
    await Food.sync({alter: thue});
}
module.exports =Food;