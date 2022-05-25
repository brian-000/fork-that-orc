const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Character extends Model {}

Character.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        character_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        character_class: {
            type: DataTypes.STRING,
            allowNull: false
        },
        health: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true
            }
        },
        mana: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true
            }
        },
        strength: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true
            }
        },
        dexterity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true
            }
        },
        intelligence: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true
            }
        },
        weapon_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'weapon',
                key: 'id'
            }
        },
        armor_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'armor',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'hero'
    }
);
//exporting
module.exports = Character;