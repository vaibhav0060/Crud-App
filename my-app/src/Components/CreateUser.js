import React, { useState } from 'react'
import axios from "axios";
import {useNavigate} from "react-router-dom"
function CreateUser() {
    const [name , setName] = useState()
    const [email, setEmail] = useState();
    const [age, setAge] = useState();
const navigate = useNavigate() ; 
const Submit = (e)=>{
    e.preventDefault();
    axios.post('http://localhost:5000/create' , {name , email ,age})
    .then(result =>{ console.log(result)
    navigate("/")
})
    .catch(err => console.log(err))
}

  return (
    <div>
       <form onSubmit ={Submit}>
        <h1>Add User</h1>
        <div class="mb-3">
    <label for="exampleInputName" class="form-label">Name</label>
    <input type="text" class="form-control" id="nameInputEmail1" aria-describedby="emailHelp" onChange = {(e)=>setName(e.target.value)}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"   onChange = {(e)=>setEmail(e.target.value)}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputAge" class="form-label">Age</label>
    <input type="number" class="form-control" id="exampleInputAge" onChange = {(e)=>setAge(e.target.value)}/>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default CreateUser