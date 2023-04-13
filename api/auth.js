const router = require('express').Router();
const { eguard, assert } = require('./eguard');

const users = require('../db/users.json');

router.post('/login', eguard(async (req, res) => {
  const { email, password } = req.body;

  assert(users[email] && users[email].password === password,
    401,
    'email and password do not match'
  );

  const resp = JSON.parse(JSON.stringify(users[email]));

  delete resp.password;

  res.json(resp).send();
}));

module.exports = router;