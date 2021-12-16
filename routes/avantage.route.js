const express = require('express');
const router = express.Router();

const auth = require("../middleware/auth");


const avantage_controller = require('../controllers/avantage.controller');

router.get('/', auth() , avantage_controller.list_avantage);
router.get('/:id', auth() , avantage_controller.detail_avantage);
router.post('/', auth() , avantage_controller.add_avantage);
router.put('/:id', auth() , avantage_controller.edit_avantage);
router.delete('/:id', auth() , avantage_controller.delete_avantage);


module.exports = router;