let users=[];
let id=1;

exports.createUser=(req,res)=>{
    const {name,email}=req.body;
    const newUser={
        id:id++,
        name,
        email
    }
    users.push(newUser);
    res.status(200).json(newUser)
}
exports.getUser=(req,res)=>{
    res.status(200).json(users);
}
exports.getUserById=(req,res)=>{
    const user=users.find((u)=>u.id===parseInt(req.params.id));
    if(user===undefined)return res.status(404).json({message:"User not found"})
        res.status(200).json(user)
}
exports.editUser=(req,res)=>{
    const user=users.find((u)=>u.id===parseInt(req.params.id));
    if(user===undefined)return res.status(404).json({message:"User not found"})
        user.name=req.body.name===undefines? user.name:req.body.name;
    user.email=req.body.email ||user.email;
    res.status(200).json(user)

}
exports.deleteUser=(req,res)=>{
    const index=users.findIndex((u)=>u.id===parseInt(req.params.id));
    if(index===-1)return res.status(404).json({message:"User not found"});
    users=users.filter((u,i)=>i!==index);
    res.status(200).json({message:"User Deleted Succesfully"});

}