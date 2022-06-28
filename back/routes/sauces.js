const express = require('express');
const router = express.Router();

const sauceCtrl = require('../controlers/sauce');

router.post('/', sauceCtrl.createSauce); 
router.delete('/:id', sauceCtrl.deleteSauce);
router.put('/:id',sauceCtrl.modifySauce);
router.get('/:id', sauceCtrl.getOneSauce);
router.get('/', sauceCtrl.getAllSauces);

  
module.exports = router;