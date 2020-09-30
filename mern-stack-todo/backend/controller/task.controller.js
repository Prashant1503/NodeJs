const Task = require('../model/task.model');


// function to create new todo.
exports.createTodo = (req,res) => {

    const {title,description,strDate,dueDate,status} = req.body;
 
     const todo = new Task({
         title : title,
         description : description,
         strDate : Date.parse(strDate),
         dueDate : Date.parse(dueDate),
         status : Date.parse(status)
     });
         todo.save().then((result) => {
             return res.status(200).json({status : true,data : result,message : 'Todo added success'});
         })
         .catch((err) => {
             return res.status(500).json({status : false,error : err});
         });
     }
  

// function to update the existing todo by id.
exports.updateTodo = (req,res) => {

    try {
        Task.findByIdAndUpdate(req.params.id,{$set : req.body},(err,result) => {
            if(err) return res.status(500).json({status : failed,error : err});
            else return res.status(200).json({message : 'Updated success',data : result});
        });

    } catch(e) {
        console.log(`Something went wrong!`);
    }  
}

// function to get the todo
exports.getTodos = (req,res) => {
    Task.find().exec((err,task) => {

        if(err) return res.status(404).json({status : false,error : err});
        else return res.status(200).json({status : true, data : task});
    });
}

// function to delete the todo by id
exports.deleteTodo = (req,res) => {

    try {
        Task.findByIdAndRemove(req.params.id).exec((err,deletedItem) => {
            if(err) return res.status(422).json({error : err});
            else return res.status(200).json({success : true,data : deletedItem,message : 'Task removed success'});
        })
        .catch((error) => {
            console.log(`Delete failed : ${error}`);
        });

    }
    catch(e) {
        console.log('Something went wrong!');
    }
}



