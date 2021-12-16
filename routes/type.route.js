const express = require('express');
const router = express.Router();

const auth = require("../middleware/auth");


const type_controller = require('../controllers/type.controller');

router.get('/', auth() , type_controller.list_type);
router.get('/:id', auth() , type_controller.detail_type);
router.post('/', auth() , type_controller.add_type);
router.put('/:id', auth() , type_controller.edit_type);
router.delete('/:id', auth() , type_controller.delete_type);


module.exports = router;