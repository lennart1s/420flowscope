const router = require('express').Router();
const { eguard, assert } = require('./eguard');

const users = require('../db/users.json');

router.get('/:email?', eguard(async (req, res) => {
  const { email } = req.params;

  if (!email) {
    res.json(Object.values(users).map((u) => {
      const user = JSON.parse(JSON.stringify(u));
      delete user.password;
      return user;
    })).send();
    return;
  }

  assert(users[email], 401, `no user found with email '${email}'`);
  
  const user = JSON.parse(JSON.stringify(users[email]));
  delete user.password;
  
  res.json(user).send();
}));

module.exports = router;