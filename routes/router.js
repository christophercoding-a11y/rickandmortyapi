const express = require('express')
const axios = require ('axios')
const router = express.Router()

// static file
router.use(express.static('public'))

const characterRoutes = require('./api/characterRoutes')
router.use('/characters', characterRoutes)

const episodeRoutes = require('./api/episodeRoutes')
router.use('/episodes', episodeRoutes)

const locationRoutes = require('./api/locationRoutes')
router.use('/locations', locationRoutes)

router.get('/', (req, res)=> {
    res.render('pages/home', {
        title: 'Rick and Morty',
        name: 'My Rick and Morty Website'
    })
})

module.exports = router

