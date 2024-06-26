import axios from "axios";
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
// 


function Users() {
   const [users, setUsers] = useState([]);

   useEffect(() => {
axios.get("http://localhost:5000")
.then(result =>setUsers(result.data) )
.catch(err =>console.log(err))
  }, []);

  const handleDelete = (id)=>{
    axios.delete("http://localhost:5000/delete/"+id)
    .then(result =>{console.log(result)
    window.location.reload()
    })
    .catch(err =>console.log(err))
  }
  return (
    <div className="container">
<div className="row d-flex justify-content-center">
  <div className="col">
<table className="text-center">
<thead>
<tr>  <Link to="/create"  className="add-user-btn">Add User + </Link>
</tr>
</thead>
    <thead>
        <tr>
            <th> Name </th>
            <th> Email</th>
            <th> Age </th>
             <th> Action</th>

             </tr>
             </thead>
  
<tbody>
{
    users.map((user)=>{
        return <tr>
            <td> {user.name}</td>
            <td> {user.email}</td>
            <td> {user.age}</td>
            <td> 
            <Link to={`/update/${user._id}`} className = "user-action-btn update" >Update</Link>
                 <button  onClick = {(e)=>handleDelete(user._id)} className="user-action-btn delete">Delete</button>
                 </td>
            
        </tr>
    })
}

</tbody>

</table>
</div>
</div>

    </div>
  )
}

export default Users