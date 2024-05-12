const express = require('express');
const router = express.Router();
const apartmentCtrl = require('../controllers/apartments');

router.get('/', apartmentCtrl.index);
router.get('/:id', apartmentCtrl.show);


module.exports = router; 

