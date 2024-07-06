import { db } from '../db.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = (req, res) => {
  //check user
  const q = 'SELECT * from users where email = ? or userName = ?';

  db.query(q, [req.body.email, req.body.userName], (err, data) => {
    if (err) return res.json(err);
    if (data.length) return res.status(409).json('user already exist!!');

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const q = 'INSERT INTO users(`userName`, `email`, `password`) VALUES (?)';
    const values = [req.body.userName, req.body.email, hash];

    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);

      return res
        .status(200)
        .json({ code: 200, message: 'User created successfully!!!' });
    });
  });
};

export const login = (req, res) => {
  //CHECK user exist
  const q = 'SELECT * FROM users WHERE `userName` = ?';

  db.query(q, [req.body.userName], (err, data) => {
    if (err) return res.json(err);

    if (data.length === 0) return res.status(404).json('User not found!!!');

    //check password
    const passwordIsCorrect = bcrypt.compareSync(
      req.body.password,
      data[0].password,
    );

    if (!passwordIsCorrect)
      return res.status(400).json('Wrong user name or password!');

    const { password, ...user } = data[0];

    const token = jwt.sign({ id: data[0].id }, 'jwtSecretkey');
    res
      .cookie('access_token', token, { httpOnly: true })
      .status(200)
      .json(user);
  });
};

export const logout = (req, res) => {};
