const express = require('express');
const router = express.Router();


const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/upload/property");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "_" + file.originalname);
    },
});
const upload = multer({ storage });

const property_controller = require('../controllers/property.controller');

router.get('/', property_controller.list_property);
router.get('/:id', property_controller.detail_property);
router.get('/type/:id', property_controller.list_type_property);
router.get('/agent/:id', property_controller.list_agent_property);
router.get('/search/:search', property_controller.search_property);

router.post('/add', auth() , upload.single('picture') , property_controller.add_property);

router.put('/:id', auth() , property_controller.edit_property);

router.delete('/:id', auth() , property_controller.delete_property);


module.exports = router;