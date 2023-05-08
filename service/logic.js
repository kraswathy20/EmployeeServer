const db=require('./db')

const allEmployee=()=>{
  return db.Employee.find().then(result=>{
        if(result){
            return{
                statusCode:200,
                employees:result
            }
        }
        else{
            return{
                statusCode:404,
                message:"no data is available"
            }
        }
    })
}

module.exports={
    allEmployee
}