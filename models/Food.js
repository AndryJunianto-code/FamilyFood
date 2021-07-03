const mongoose = require('mongoose')

const FoodSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    ratings:{
        type:Array,
        default: [],
    },
    ratingsValue: {
        type: Number,
        default: 0.0
    },
    categories: {
        type: Array,
        required:true,
    },
    image: {
        type: String
    }
},{timestamps:true})

module.exports = mongoose.model('foods', FoodSchema)