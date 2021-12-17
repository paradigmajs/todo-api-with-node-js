const {Schema, model} = require('mongoose')

const Todo = new Schema({
    title:{
        type:String,
        require:true
    },
    complete:{
        type:Boolean,
        default:false
    },
    path: {
        type:String
    },
    caption:{
        type:String
    }

})

module.exports = model('Todo', Todo)