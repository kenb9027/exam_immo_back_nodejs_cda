const express = require('express');
const router = express.Router();

const auth = require("../middleware/auth");
const admin = require("../middleware/admin");



const agent_controller = require("../controllers/agent.controller");

router.get('/',  agent_controller.agent_list);

router.post('/add', admin(), agent_controller.agent_add);
router.post('/login', agent_controller.agent_login);


module.exports = router;