const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users')
const ensureLoggedIn = require('../../config/ensureLoggedIn')
const notesCtrl = require('../../controllers/api/notes')

router.post('/', usersCtrl.create); // it is empty / becasuer we will be using prefix after
router.post('/login', usersCtrl.login);
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);
router.post('/', notesCtrl.create);


module.exports = router;