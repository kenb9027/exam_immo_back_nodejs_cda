const express = require('express');
const router = express.Router();

const auth = require("../middleware/auth");

// const multer = require("multer");

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "./public/upload/gift");
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + "_" + file.originalname);
//     },
// });

const agent_controller = require("../controllers/agent.controller");

router.get('/', auth(), agent_controller.agent_list);

router.post('/add', agent_controller.agent_add);
router.post('/login', agent_controller.agent_login);


module.exports = router;