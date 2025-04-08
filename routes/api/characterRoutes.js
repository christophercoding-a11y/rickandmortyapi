const express = require('express')
const router = express.Router()
const axios = require('axios')

let count

// get data using axios
axios.get('https://api.sampleapis.com/rickandmorty/characters')
    .then(res => count = res.data. length)

// localhost:3000/rickandmorty/characters
router.get('/', (req, res)=> {
    const url = 'https://api.sampleapis.com/rickandmorty/characters'

    axios.get(url).then(response => {
        res.render('pages/characters', {
            title: 'Characters',
            name: 'rick and morty',
            data: response.data,
            path: 'characters'
        })
    })
})


module.exports = router

