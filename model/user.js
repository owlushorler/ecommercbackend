const mongoose = require('mongoose')

const customers = new mongoose.Schema({
    email:"string",
    pass:"string",
    name:"string",
    num:"number"
})

module.exports = mongoose.model("sign", customers)