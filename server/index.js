const express = require('express');
const mongoose = require("mongoose")
const cors = require("cors");

const  app = express();
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb+srv://chaudharivaibhav60:R8gnJkV0aWC0j4KY@newcluter.vc9cudf.mongodb.net/")
const User = require("./UserModel")
// async function insert (){
//   await User.create({
//         name : "ganesh",
//         email : "ganesh@gmail.com",
//         age : "24",
//     })
// }
// insert()

app.get("/" , (req, res) => {
    User.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})
app.get("/getUser/:id", (req, res) => {
const id = req.params.id ;
User.findById({_id : id })
.then(users => res.json(users))
.catch(err => res.json(err))

})
app.put('/update/:id' ,(req ,res)=>{
    const id = req.params.id ;
    User.findByIdAndUpdate({_id : id } , {name : req.body.name ,
         email : req.body.email ,
          age : req.body.age})
    .then(users => res.json(users))
    .catch(err => res.json(err))

})
app.post("/create" , (req , res)=>{
    User.create(req.body)
    .then(users => res.json(users))
    .catch( err => res.json(err))

})
app.delete("/delete/:id" , (req, res)=>{
    const id = req.params.id ;
    User.findByIdAndDelete({_id : id})
    .then(users => res.json(users))
    .catch( err => res.json(err))
})

app.listen(5000 , ()=>{console.log("server is running ")})
