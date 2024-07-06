import db from '../db.js';

export const getPosts = (req, res) => {
  const q = req.query.cat
    ? 'SELECT * FROM posts WHERE cat = ?'
    : 'SELECT * FROM posts';

  db.query(q, [req.query.cat], (err, data) => {
    if (err) return req.send(err);

    return res.status(200).json(data);
  });
};

export const getPost = (req, res) => {
  const q = 'SELECT * FROM posts WHERE id = ?';

  db.query(q, [req.params.id], (err, data) => {
    if (err) return req.send(err);

    return res.status(200).json(data);
  });
};

export const addPost = (req, res) => {
  res.json('this is the post');
};

export const delPost = (req, res) => {
  res.json('this is the post');
};

export const updatePost = (req, res) => {
  res.json('this is the post');
};
