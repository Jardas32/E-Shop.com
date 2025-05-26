
const express = require('express');
const mysql = require('mysql');
const CONFIG = require('./config');

const app = express();
const PORT = 3000;

const cors = require('cors');
app.use(cors());

app.get('/products', (req, res) => {
    const connection = mysql.createConnection(CONFIG);
    connection.connect();

    const query = 'SELECT * FROM products';

    connection.query(query, (error, results) => {
        if (error) {
            console.error('MySQL Error:', error);
            res.status(500).json({ error: 'Database error' });
        } else {
            res.json(results);
        }
        connection.end();
    });
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
