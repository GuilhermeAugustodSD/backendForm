const sqliteConnection = require("../../sqlite");

const createForm = require("./createForm");

async function migrationsRun() {
    const schemas = [
        createForm
    ].join('');

    sqliteConnection()
    .then(db =>  db.exec(schemas))
    .catch(error => console.error(error));

}

module.exports = migrationsRun;