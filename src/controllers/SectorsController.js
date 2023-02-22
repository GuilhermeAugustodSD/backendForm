const knex = require("../database/knex");
const sqliteConnection = require("../database/sqlite");

class SectorsController {
    async create(req, res){
        const { value, text } = req.body;

        const sectors_id = await knex("optgroups").insert({
            value,
            text
        });

        res.json();
    }

    async index(req, res){

        const { id } = req.body;

        const sectors = await knex("optgroups");
        const options = await knex("options");

        res.json([
            sectors,
            options
        ])
    }

    async show(req, res){
        const { value } = req.params;

        // const database = await sqliteConnection();

        // const formValue = await database.run("SELECT * FROM options value = (?)", [value]);

        const formValueOptions = await knex("options").where({ value: value }).first();
        const formValue = await knex("optgroups").where({value}).first();
        return res.json({...formValue, ...formValueOptions});
    }

}

module.exports = SectorsController;