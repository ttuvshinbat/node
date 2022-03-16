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
        type: DataTypes.INTEGER,
        allowNull: false
    },
    portion :{
        type : DataTypes.INTEGER,
        allowNull: false
    },
    stock : {
        type : DataTypes.INTEGER,
        allowNull: false
    },
    discount : {
        type : DataTypes.INTEGER,
        allowNull: false
    },
    recipe : {
        type : DataTypes.STRING,
        allowNull: false
    },
   foodCategoryId : {
       type : DataTypes.INTEGER,
       allowNull: false
   }},{
    timestamps : false
})
Category.hasMany(Food);
Food.belongsTo(Category);
async () => {
    await Food.sync({alter: true});
}
module.exports =Food;