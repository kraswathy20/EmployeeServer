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

const addEmployee=(id,uname,age,designation,salary)=>{
  return  db.Employee.findOne({id}).then(result=>{
        if(result){
            return{
                statusCode:404,
                message: "Employee Already Exist!!"
            }
        }
        else{
            // create object for new employee
            const newEmp=new db.Employee({
                id,
                uname,
                age,
                designation,
                salary
            })
            // save the object
            newEmp.save()
            return{
                statusCode:200,
                message:"employee added successfully!!"
            }
        }
    })
}


const removeEmployee=(eid)=>{
return db.Employee.deleteOne({id:eid}).then(result=>{
    if(result){
        return{
            statusCode:200,
            message:"employee removed!!"
        }
    }
    else{
        return{
            statusCode:404,
            message:"employee not present!!"
        }
    }
})
}

module.exports={
    allEmployee,addEmployee,removeEmployee
}