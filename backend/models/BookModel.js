const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    title : {type : String, required : [true, 'please add a title']},
    description : {type : String, required : [true, 'please add a description']},
    details : {type : String, required : [true, 'please add the details']},
    author : {type : String, required : [true, 'please add the author']},
    format : {type : String, required : [true, 'please add the format']},
    category : {type : String, required : [true, 'please add the category']},
    price : {type : Number, required : [true, 'please add the price']},
    quantity : {type : Number, required : [true, 'please add the quantity']},
    imageUrl : {type : String, required : true},
},
{
    timestamps : true
})

module.exports = mongoose.model('Book', bookSchema)