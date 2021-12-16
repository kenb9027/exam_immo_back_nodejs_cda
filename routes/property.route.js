const express = require('express');
const router = express.Router();

const property_controller = require('../controllers/property.controller');

router.get('/', property_controller.list_property);
// router.get('/:id', property_controller.detail_property);
// router.get('/type/:id', property_controller.list_category_property);
// router.get('/search/:search', property_controller.search_property);

router.post('/add', property_controller.add_property);

// router.put('/:id', property_controller.edit_property);

// router.delete('/:id', property_controller.delete_property);


module.exports = router;