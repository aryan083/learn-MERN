const express = require('express');
const  router =express.Router();

router.get('/', (req, res, next) => {
    res.send('This the admin page');
}
);

router.post('/', (req, res, next) => {
    res.send('This the admin page');
}
);

module.exports = router;