const mongoose  =require('mongoose');

const message = new mongoose.Schema({
    userId:String,
    todo:String,
    active:Boolean
})

module.exports = mongoose.model('todos',message);