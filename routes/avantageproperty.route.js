const express = require('express');
const router = express.Router();


const avantageproperty_controller = require('../controllers/avantageproperty.controller');

router.get('/avantage/:id', avantageproperty_controller.property_list_by_avantage);
router.get('/property/:id', avantageproperty_controller.avantage_list_by_property);




module.exports = router;