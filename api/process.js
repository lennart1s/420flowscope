const router = require('express').Router();
const { eguard, assert } = require('./eguard');

const processes = require('../db/processes.json');
const processTypes = require('../db/processTypes.json');

router.get('/types/:typeId?', eguard(async (req, res) => {
  const { typeId } = req.params;

  if (typeId) {
    assert(processTypes[typeId], 404, `no type found with id '${typeId}'`);

    const type = JSON.parse(JSON.stringify(processTypes[typeId]));
    type.type = typeId

    res.json(type).send();
    return;
  }

  res.json(processTypes);
}));

router.get('/:id', eguard(async (req, res) => {
  const { id } = req.params;

  const process = processes.filter((p) => p.id === id)[0];

  assert(process, 404, `no process found with id '${id}'`);

  res.json(process).send();
}));

module.exports = router;