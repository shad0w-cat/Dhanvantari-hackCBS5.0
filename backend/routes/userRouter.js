const express = require('express');
const router = express.Router();
const { create, find } = require('../controllers/userController')

router.get('/', async function (req, res, next) {
	try {
		res.send({ 'Message': "OK" });
	} catch (err) {
		console.error(`Error while loading data`, err.message);
		next(err);
	}
});

router.post('/signup', async function (req, res, next) {
	const data = req.body
	create(res, data)

});
router.post('/login', async function (req, res, next) {
	const data = req.body
	find(res, data)
});
module.exports = router;