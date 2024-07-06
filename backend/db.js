import mysql from 'mysql';

export const db = mysql.createConnection({
	host: 'localhost',
	user: 'oumate',
	password: 'password',
	database: 'blog',
});
