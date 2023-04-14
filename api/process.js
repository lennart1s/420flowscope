const router = require('express').Router();
const { v4: uuid } = require('uuid');
const { eguard, assert } = require('./eguard');

const users = require('../db/users.json');
const processes = require('../db/processes.json');
const processTypes = require('../db/processTypes.json');

router.get('/types', eguard(async (req, res) => {
  res.json(processTypes);
}));

router.get('/:id?', eguard(async (req, res) => {
  const { id } = req.params;
  
  if (!id) {
    const { status } = req.query;
    let filtered = JSON.parse(JSON.stringify(processes));
    if (status === 'done') {
      filtered = processes.filter((p) => p.step === p.num_steps);
    } else if (status === 'pending') {
      filtered = processes.filter((p) => p.step < p.num_steps);
    }
    res.json(filtered);
    return;
  }

  const process = processes.filter((p) => p.id === id)[0];

  assert(process, 404, `no process found with id '${id}'`);

  res.json(process).send();
}));

router.post('/', eguard(async (req, res) => {
  const userEmail = req.headers.authorization;
  const { type, payload } = req.body;

  // assert(userEmail && users[userEmail], 401);
  assert(type && processTypes[type], 403, `unknown process type '${type}'`);
  
  // TODO: check payload

  const id = uuid();
  processes.push({
    id,
    type,
    ...payload,
  });

  res.json({
    id,
  }).send();
}));

module.exports = router;