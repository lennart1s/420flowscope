const router = require('express').Router();
const { v4: uuid } = require('uuid');
const { eguard, assert } = require('./eguard');

const users = require('../db/users.json');
const processes = require('../db/processes.json');
const processTypes = require('../db/processTypes.json');

router.get('/types/:typeId?', eguard(async (req, res) => {
  const { typeId } = req.params;

  if (!typeId) {
    res.json(processTypes).send();
    return;
  }

  assert(processTypes[typeId], 404, `no type found with id '${typeId}'`);

  const type = JSON.parse(JSON.stringify(processTypes[typeId]));
  type.type = typeId;

  res.json(type).send();
}));

router.get('/:id?', eguard(async (req, res) => {
  const { id } = req.params;

  if (!id) {
    res.json(processes).send();
    return;
  }

  const process = processes.filter((p) => p.id === id)[0];

  assert(process, 404, `no process found with id '${id}'`);

  res.json(process).send();
}));

router.post('/', eguard(async (req, res) => {
  const userEmail = req.headers.authorization;
  const { type, payload } = req.body;

  assert(userEmail && users[userEmail], 401);
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