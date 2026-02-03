const express=require("express");
const { getUser, getUserById, createUser, editUser, deleteUser } = require("../controller/userController");
const userRoute = express.Router();
userRoute.get("/",getUser);//(req,res)=>{}
userRoute.get("/:id",getUserById);
userRoute.post("/create",createUser);
userRoute.put("/update/:id",editUser);
userRoute.delete("/delete/:id",deleteUser);
module.exports=userRoute;



// const express=require("express");
// const { getUserById, createUser, editUser, deleteUser } = require("../controller/userController");
// const userRoute=express.Router();
// userRoute.get("/",getUser);
// userRoute.get("/:id",getUserById);
// userRoute.post("/create",createUser);
// userRoute.put("/update/:id",editUser);
// userRoute.delete("/delete/:id",deleteUser);
// module.exports=userRoute;
