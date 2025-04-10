const express = require('express')
const router = express.Router()
const axios = require('axios')

let count 

axios.get('https://api.sampleapis.com/rickandmorty/locations')
    .then(res => count = res.data.length)

router.get('/', (req, res)=> {

    const url = 'https://api.sampleapis.com/rickandmorty/locations'

    axios.get(url).then(resp => {
        res.render('pages/locations',{
            title: 'Locations',
            name: 'Locations',
            data: resp.data,
            path: 'locations'
        })
    })
})

router.get('/type/:type', (req, res) => {

    const type = req.params.type
    const url = 'https://api.sampleapis.com/rickandmorty/locations'

    let typeArr = []

    axios.get(url)
    .then(resp => typeArr = resp.data.filter(item => item.type == type))
    .then(typeArr => {
        res.render('pages/locations', {
            title: type,
            name: `${type} locations`,
            data: typeArr,
            path: `locations/type/${type}`
        })
    })
})

router.get('/:id', (req, res)=> {
    const id = req.params.id

    const url = `https://api.sampleapis.com/rickandmorty/locations/${id}`

    axios.get(url).then(resp => {
        const data = resp.data
        res.render('pages/locationSingle', {
            title: data.title,
            name: data.name,
            data: data,
            path: 'locations',
            count
        })
    })
})


module.exports = router

