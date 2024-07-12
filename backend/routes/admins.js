const express = require('express');
const  router =express.Router();

router.get('/', (req, res, next) => {
    res.send('This the admin page');
}
);
router.get('/admin/:adminid', (req, res, next) => {

    req.params.adminid;
    res.send(`This is the admin page with id ${req.params.adminid}`);
}
);


router.get('/admin/:adminid', (req, res, next) => {
    const id = req.body.adminid;
    res.send(`This is the admin page with id ${id}`);
    

}
);

module.exports = router;