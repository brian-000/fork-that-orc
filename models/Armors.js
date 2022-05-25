const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
//creating Armor 
class Armor extends Model {}
//initializing
Armor.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        armor_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        armor_class: {
            type: DataTypes.STRING,
            allowNull: false
        },
        armor_rating: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'armor',
    }
)

module.exports = Armor;