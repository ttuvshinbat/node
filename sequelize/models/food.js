const {Sequelize, DataTypes} = require('@sequelize/core');
const { category_update } = require('../controller/categoryController');
const sequelize = require('../database')
const Category = require('../models/food_category')
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
   foodCategoryId : {
       type : DataTypes.INTEGER
   }
   
},{
    timestamps : false
})
Category.hasMany(Food);
Food.belongsTo(Category);
async () => {
    await Food.sync({alter: true});
}
module.exports =Food;