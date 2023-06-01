const express = require('express');
const router  = express.Router();
const path = require('path');

const customerController = require('../controllers/customerController');

router.get('/styles.css', function(req, res) {
    res.sendFile(path.join(__dirname, '../views/partials/styles.css'));
});
router.get('/form.css', function(req, res) {
    res.sendFile(path.join(__dirname, '../views/partials/form.css'));
});
router.get('/script.js', function(req, res) {
    res.sendFile(path.join(__dirname, '../views/partials/script.js'));
});

router.get('/customer', customerController.list)
router.get('/get', customerController.get)
router.post('/add', customerController.save)
router.get('/delete/:id', customerController.delete)
router.get('/update/:id', customerController.edit)
router.post('/update/:id', customerController.update)

module.exports = router;

