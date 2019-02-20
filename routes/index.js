const express = require('express');
const router = express.Router();

router.get('/', (res, res) => {
    res.send('Index :^)')
})

module.export = router