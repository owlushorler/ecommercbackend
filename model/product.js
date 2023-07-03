const mongoose = require('mongoose')

const customers = new mongoose.Schema({
    name:"string",
    price:"string",
    des:"string",
    category:"string",
    rate:"number"
})

module.exports = mongoose.model("product", customers)