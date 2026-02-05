let todos=[]
let id=1;
const Todo=require("../models/todo");
exports.getTodo=async(req,res)=>{
    try{
         const todos=await Todo.find();
         res.status(200).json(todos);
    }catch(err)
    {
        res.status(500).send(err);
    }
    

    // res.status(200).json(todos)
    // res.send("Get Working")
};

exports.createTodo=async(req,res)=>{
    try{
        const {task} =req.body;
       if (task===undefined)
       {
        return res.status(401).json({message:"Task not found"});
       }
       const todos=await Todo.create({
        task,
        completed:false
       })
       res.status(201).json(todos);
    }catch(err){
       res.status(500).send(err);
    }

    };

    // res.send("Post working")
exports.updateTodo=async(req,res)=> {
   try{
    //  const todo= await Todo.findById(req.params.id);
    // if(!todo){
    //     res.status(404).json({message:"Todo not found"})
    // }
    // todo.task=req.body.task || todo.task;
    // todo.completed=req.body.completed===undefined?todo.completed:req.body.completed
    // await todo.save();
    const todo=await Todo.findByIdAndUpdate(req.paramas.id,req.body,{new:true})
    res.status(200).json(todo)
   }catch(err){
    res.status(500).send(err);

   }
    // console.log(todo)
    // const todo=todos.find(t=>(t.id===index)===parseInt(req.body))
    // res.send("Put working")
};
exports.deleteTodo=async(req,res)=>{
    try{
        await Todo.findByIdAndDelete(req.params.id);
        res.status(200).json({message:"Task deleted successfully"})
    }catch(err)
    {
        res.status(500).send(err);
    }
    
}




// let todos=[];
// let id=1;

// exports.getTodo=(req,res)=>{
//     res.status(200).json(todos)
// };
// exports.createTodo=(req,res)=>{
//      const {task}=req.body;
//      const newTodo={
//           id:id++,
//           task,
//           Completd:false
//      }
//      todos.push(newTodo)
//      res.json(newTodo)
// };
// exports.updateTodo=(req,res)=>{
//     const todo=todos.find((t)=>t.id===parseInt(req.params.id));
//     if(!todo){
//      res.json({message:"Todo not found!"})
//     }
//     todo.task= req.body.task || todo.task;
//     todo.Completed=req.body.Completed===undefined?todo.Completed:req.body.Completed
//     res.json(todo)
// //     console.log(todo)
// };
// exports.deleteTodo=(req,res)=>{
//      //res.send("Delete working")
//      const index=todos.findIndex(t=>t.id===parseInt(req.params.id))
//      if(index===-1)
//           return res.status(404).json({message:"Task not found"})
//      todos.filter((_,i)=>i!==index);
//      res.status(200).json({message:"Task deleted successfully"})
// };