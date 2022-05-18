const router = require('express').Router();
const db = require('../../config/connection');
const { Armors, Character, Weapons, Vote } = require('../../models');
const sequelize = require('../../config/connection');
var weaponId = require('./weapon-routes');

router.get('/', (req, res) => {
    Character.findAll({
        attributes: [
            'id',
            'character_name',
            'character_class',
            'health',
            'mana',
            'strength',
            'dexterity',
            'intelligence',
            'weapon_id',
            'armor_id',
            [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE hero.id = vote.hero_id)'), 'vote_count']
        ]
    })
        .then(dbData => res.json(dbData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.get('/:id', (req, res) => {
    Character.findAll({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'character_name',
            'character_class',
            'health',
            'mana',
            'strength',
            'dexterity',
            'intelligence',
            'weapon_id',
            'armor_id',
            [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE hero.id = hero.post_id)'), 'vote_count']
        ]
    })
        .then(dbData => res.json(dbData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.post('/', (req, res) => {
    Character.create({
        character_name: req.body.character_name,
        character_class: req.body.character_class,
        health: req.body.health,
        mana: req.body.mana,
        strength: req.body.strength,
        dexterity: req.body.dexterity,
        intelligence: req.body.intelligence,
        weapon_id: sequelize.literal('(SELECT id FROM weapon ORDER BY ID DESC LIMIT 1)'),
        armor_id: sequelize.literal('(SELECT id FROM armor ORDER BY ID DESC LIMIT 1)'),
        user_id: req.session.user_id
    })

        .then(userData => res.json(userData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
});

// delete character
router.delete('/:id', (req, res) => {
    Character.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(userData => {
            res.json(userData)
                .catch(err => {
                    console.log(err);
                    res.status(500).json(err);
                });
        })
})

module.exports = router;