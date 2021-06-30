const mongoose = require('mongoose')

const FoodSchema = new mongoose.Schema({
    name: {
        type: String
    },
    age: {
        type: String
    }
})

module.exports = mongoose.model('foods', FoodSchema)