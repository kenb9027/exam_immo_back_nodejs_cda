const express = require('express');
const router = express.Router();


const tagproperty_controller = require('../controllers/tagproperty.controller');

router.get('/tag/:id', tagproperty_controller.property_list_by_tag);
router.get('/property/:id', tagproperty_controller.tag_list_by_property);




module.exports = router;