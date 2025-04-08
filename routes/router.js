const express = require('express')
const axios = require ('axios')
const router = express.Router()

// static file
router.use(express.static('public'))

const characterRoutes = require('./api/characterRoutes')
router.use('/characters', characterRoutes)

router.get('/', (req, res)=> {
    res.render('pages/home', {
        title: 'Rick and Morty',
        name: 'Cartoon'
    })
})

module.exports = router