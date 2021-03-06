const mysql = require('mysql2');
const dotenv = require('dotenv');
require('dotenv').config();

// connect to database
const db = mysql.createConnection(
    {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: 'employee_db'
    }
);

module.exports = db;