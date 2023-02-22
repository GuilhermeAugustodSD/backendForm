const createForm = `
    CREATE TABLE IF NOT EXISTS forms (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR,
        sectors VARCHAR,
        term BOOLEAN
    )
`;

module.exports = createForm;