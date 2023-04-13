const router = require('express').Router();
const { eguard, assert } = require('./eguard');

const processes = require('../db/processes.json');

router.get('/:id', eguard(async (req, res) => {
  const { id } = req.params;

  const process = processes.filter((p) => p.id === id)[0];

  assert(process, 404, `no process found with id '${id}'`);

  res.json(process).send();
}));

module.exports = router;