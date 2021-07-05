const router = require('express').Router()
const verify = require('./authMiddleware')
const Food = require('../models/Food')

router.post('/foods',verify, async (req,res)=> {
    const newFood = new Food(req.body);
    try{
        if(req.user.isAdmin === true) {
            const savedFood = await newFood.save();
            res.status(200).json(savedFood)
        } else {
            res.status(403).json("YOU ARE NOT ADMIN")
        }
    } catch(err)  {
        res.status(500).json(err)
    }
})

router.put('/foods/:id', verify, async(req,res)=> {
    try{
        if(req.user.isAdmin === true) {
            try{
                const updatedFood = await Food.findByIdAndUpdate(req.params.id, {
                    $set: req.body
                }, {new:true})
                res.status(200).json(updatedFood)
            } catch(err) {
                res.status(500).json(err)
            }
        } else {
            res.status(401).json("YOU ARE NOT ADMIN")
        }
    } catch(err) {
        res.status(500).json(err)
    }
})


router.get('/foods/:category', async (req,res)=> {
    /* const categoryQuery = req.query.category; */
    const categoryQuery = req.params.category
    try{
        let foods;
        if(categoryQuery) {
            foods = await Food.find({
                categories: {
                    $in: [categoryQuery]
                }
            })
        } else {
            foods = await Food.find()
        }
        res.status(200).json(foods)
    }catch(err){
        res.status(500).json(err)
    }
})


module.exports = router