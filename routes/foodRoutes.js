const router = require('express').Router()
const Food = require('../models/Food')

router.get('/foods', async (req,res)=> {
    try{
        const food = await Food.find()
        res.status(200).json(food)
    }catch(err){
        res.status(500).json(err)
    }
})


module.exports = router