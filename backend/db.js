import mysql from 'mysql';

const db = mysql.createConnection({
  host: 'localhost',
  user: 'oumate',
  password: 'Oum0@msql.',
  database: 'blog',
});

export default db;
