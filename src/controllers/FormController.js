const AppError = require("../utils/AppError");

const sqliteConnection = require("../database/sqlite");

const knex = require("../database/knex");

class FormController {
    async create(req, res) {
        const { name, sectors, term} = req.body;

        if(!term){
            throw new AppError("The term is obriogatory!");
        }

        const database = await sqliteConnection();

        await database.run("INSERT INTO forms (name, sectors, term) VALUES (?,?,?)", [name, sectors, term]);


       res.status(201).json({name, sectors, term})
    }

    async delete(req, res) {
        const { id } = req.params;

        const database = await sqliteConnection();
        await database.run("DELETE FROM forms WHERE id = (?)", [id])

        return res.jsop();
    }

    async update(req, res) {
        const { name, sectors } = req.body;
        const { id } = req.params;

        const database = await sqliteConnection();
        const form = await database.get("SELECT * FROM forms WHERE id = (?)", [id]);

        form.name = name ?? form.name;
        form.sectors = sectors ?? form.sectors;

        await database.run(`
            UPDATE forms SET
            name = ?,
            sectors = ?
            WHERE id = ?`,
            [form.name, form.sectors, id]
        );

        return res.json();
    }

    async index(req, res){
        const form = await knex("forms");

        return res.json(form);
    }
}

module.exports = FormController;