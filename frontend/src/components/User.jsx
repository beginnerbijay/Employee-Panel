import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'

const User = () => {
  const {id} = useParams();
  const [user,setuser] = useState([]);
  const getdata =async()=>{
    try{
      const res = await fetch(`http://localhost:8000/user/${id}`,{
        method:'GET',
        headers:{
          'Content-Type':'application/json'
        }
      });
      const responce = await res.json();
      if(res.status === 422){
         console.log("invalid")
      }else{
        console.log("rendering successful");
        setuser(responce)
      }
    }catch(e){
       console.log('error')
    }
  }  
  useEffect(()=>{
    getdata()
  },[])
  return (
    <div className='container  d-flex justify-content-center'>
    <div className="card" style={{width: 600,marginTop:100}}>
  <div className="card-body">
    <h2 className="card-title"><span>Name:</span>{user.fname} {user.lname}</h2>
    <h5 className="card-title mb-2"><span>Job Profile:</span>{user.job}</h5>
    <h5 className="card-title mb-2"><span>Gender:</span>{user.sex}</h5>
    <h5 className="card-title mb-2"><span>Age:</span>{user.age}</h5>
    <h5 className="card-title mb-2"><span>Salary:</span>{user.salary}</h5>
    <h5 className="card-title mb-2"><span><i className="bi bi-envelope"></i>:</span>{user.phone}</h5>
    <h5 className="card-title mb-2"><span><i className="bi bi-telephone-fill"></i>:</span>{user.email}</h5>
    <h5 className="card-text"><span><i className="bi bi-house-door-fill"></i>:</span>{user.add}</h5>
    <NavLink to={"/"}><button className='btn btn-primary'>Back</button></NavLink>
  </div>
</div>
</div>
  )
}

export default User