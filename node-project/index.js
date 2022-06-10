// @ts-check
const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const connection = mysql.createConnection(config);

const sql = `INSERT INTO people(name) VALUES('Cristian');`;
connection.query(sql);
connection.end();

app.get('/', (_req, res) => {
    res.send('<h1>Full Cycle</h1>');
});

app.listen(port, () => {
    console.log('Rodando na porta '+3000)
})