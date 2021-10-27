const router = require('express').Router()
const accountTemplate = require('../models/SignUpModels')

router.post('/find', (req, res) => {
    const userid = req.body.userid;

    accountTemplate.findOne({ uid: userid })
        .then((account) => {
            res.status(200).json(account)
        })
        .catch((err) => res.json(err))

})

module.exports = router