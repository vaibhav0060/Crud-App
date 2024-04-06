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
    <form onSubmit = {update}  className="update-user-form">
    <h2>Update User</h2>
     <div className="input-group">
 <label for="exampleInputName" className="form-label">Name</label>
 <input type="text" className="form-control" id="nameInputEmail1" aria-describedby="emailHelp" value={name} onChange = {(e)=> setName(e.target.value)}/>
</div>
<div className="input-group">
 <label for="exampleInputEmail1" className="form-label">Email address</label>
 <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"   value={email}  onChange = {(e)=> setEmail(e.target.value)}/>
</div>
<div className="input-group">
 <label for="exampleInputAge" className="form-label">Age</label>
 <input type="text" className="form-control" id="exampleInputAge"  value={age}  onChange = {(e)=> setAge(e.target.value)}/>
</div>

<button type="submit" className="submit-btn">Submit</button>
</form>
 </div>
  )
}

export default UpdateUser