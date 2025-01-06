const router = require('express').Router();
const ensureAuthenticated = require('../Middlewares/Auth');

router.get('/', ensureAuthenticated, (req,res) => {
    console.log(' --- logged in User ---',req.user);
    res.status(200).json([
        {
        name:"mobile",
        price: 10000
        },
        {
        name:"tv",
        price: 20000
        }
    ])
});

module.exports = router;