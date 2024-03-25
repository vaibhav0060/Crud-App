import axios from "axios";
import React, { useEffect, useState } from 'react'
import {useNavigate, useParams} from "react-router-dom"

function UpdateUser() {
    const {id} = useParams();
    const [name , setName] = useState()
    const [email, setEmail] = useState();
    const [age, setAge] = useState();
const navigate = useNavigate() ; 

useEffect(() => {
    axios.get(`http://localhost:5000/getUser/`+id)
    .then(result => {  console.log(result.data)
        setName(result.data.name)
        setEmail(result.data.email)
        setAge(result.data.age)
    } )
    .catch(err =>console.log(err))
      }, []);
      const update = (e)=>{
        e.preventDefault();
        axios.put('http://localhost:5000/update/'+id , {name , email ,age})
        .then(result =>{ console.log(result);
        navigate("/")
      }
        )}
  return (
    <div>
    <form onSubmit = {update}>
     <h1>Upate User</h1>
     <div class="mb-3">
 <label for="exampleInputName" class="form-label">Name</label>
 <input type="text" class="form-control" id="nameInputEmail1" aria-describedby="emailHelp" value={name} onChange = {(e)=> setName(e.target.value)}/>
</div>
<div class="mb-3">
 <label for="exampleInputEmail1" class="form-label">Email address</label>
 <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"   value={email}  onChange = {(e)=> setEmail(e.target.value)}/>
</div>
<div class="mb-3">
 <label for="exampleInputAge" class="form-label">Age</label>
 <input type="number" class="form-control" id="exampleInputAge"  value={age}  onChange = {(e)=> setAge(e.target.value)}/>
</div>

<button type="submit" class="btn btn-primary">Submit</button>
</form>
 </div>
  )
}

export default UpdateUser