const mongoose=require('mongoose')

mongoose.connect('mongodb://0.0.0.0:27017/ems')



// model
const Employee=mongoose.model('Employee',{
    id:Number,
    uname:String,
    age:Number,
    designation:String,
    salary:Number

})

module.exports={
    Employee
}