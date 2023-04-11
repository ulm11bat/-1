const express = require("express")
const router = express.Router()
const axios = require('axios')


router.get('/', (req, res) => {
    res.send("User List")
})
router.get('/new', (req, res) => {
    res.send("Users New Form")
})

router.post('/', (req, res) => {
    res.send('Create User')
})


router.get('/:id', (req, res) => {
    res.send(`Get User With ID ${req.params.id}`)
})



module.exports = router