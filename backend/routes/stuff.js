const express = require('express');

const router = express.Router();

const stuff= require('../controllers/stuff')
const multer = require('../middleware/config-multer');
const auth = require('../middleware/auth');

router.post('/',auth,multer,stuff.creatPost );
router.put('/:id',auth,multer,stuff.putthing )
router.get('/', auth,stuff.getPost);
router.get('/:id',auth,stuff.getID );
router.delete('/:id',auth,stuff.deletPost );

module.exports = router;