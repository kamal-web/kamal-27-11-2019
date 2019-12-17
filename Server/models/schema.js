var mongoose = require('mongoose')
const Schema = mongoose.Schema;
var EmpSchema = new Schema({
    id:Number,
    name:String,
    email:String,
    mobile:String,
    department:String,
    role:String,
    salary:Number,
    experience:Number
},{versionKey: false})

module.exports = mongoose.model('employee',EmpSchema)
