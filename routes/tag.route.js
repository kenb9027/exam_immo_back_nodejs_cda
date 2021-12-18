const express = require('express');
const router = express.Router();

const auth = require("../middleware/auth");


const tag_controller = require('../controllers/tag.controller');

router.get('/' , tag_controller.list_tag);
router.get('/:id', tag_controller.detail_tag);
router.post('/', auth() , tag_controller.add_tag);
router.put('/:id', auth() , tag_controller.edit_tag);
router.delete('/:id', auth() , tag_controller.delete_tag);


module.exports = router;