const express = require('express')
const router = express.Router()
const axios = require('axios')

let count

// get data using axios
axios.get('https://api.sampleapis.com/rickandmorty/characters')
    .then(res => count = res.data.length)

// localhost:3000/rickandmorty/characters
router.get('/', (req, res)=> {
    const url = 'https://api.sampleapis.com/rickandmorty/characters'

    axios.get(url).then(response => {
        res.render('pages/characters', {
            title: 'Characters',
            name: 'Characters',
            data: response.data,
            path: 'characters'
        })
    })
})

router.get('/:id', (req, res)=> {
    const id = req.params.id

    const url = `https://api.sampleapis.com/rickandmorty/characters/${id}`

    axios.get(url).then(resp => {

        const data = resp.data
        res.render('pages/characterSingle', {
            title: data.title,
            name: data.name,
            data: data,
            path: 'characters',
            count
        })
    })
})


module.exports = router

