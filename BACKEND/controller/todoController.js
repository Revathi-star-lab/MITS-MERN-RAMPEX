let todos=[];
let id=1;

exports.getTodo=(req,res)=>{
    res.status(200).json(todos)
};
exports.createTodo=(req,res)=>{
     const {task}=req.body;
     const newTodo={
          id:id++,
          task,
          Completd:false
     }
     todos.push(newTodo)
     res.json(newTodo)
};
exports.updateTodo=(req,res)=>{
    const todo=todos.find((t)=>t.id===parseInt(req.params.id));
    if(!todo){
     res.json({message:"Todo not found!"})
    }
    todo.task= req.body.task || todo.task;
    todo.Completed=req.body.Completed===undefined?todo.Completed:req.body.Completed
    res.json(todo)
//     console.log(todo)
};
exports.deleteTodo=(req,res)=>{
     //res.send("Delete working")
     const index=todos.findIndex(t=>t.id===parseInt(req.params.id))
     if(index===-1)
          return res.status(404).json({message:"Task not found"})
     todos.filter((_,i)=>i!==index);
     res.status(200).json({message:"Task deleted successfully"})
};