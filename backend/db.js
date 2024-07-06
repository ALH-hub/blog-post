import mysql from 'mysql';

const db = mysql.createConnection({
  host: 'localhost',
  user: 'oumate',
  password: 'password',
  database: 'blog',
});

export default db;
