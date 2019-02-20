const express = require('express');
const router = express.Router();

router.get('/groceries', (req, res) => {
    res.send('Hello :)')
})

router.post('groceries', (req, res) => {
    res.send('hi again')
})

module.export = router