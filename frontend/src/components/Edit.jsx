import React, { useEffect,useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
  const {id} = useParams();
  const nav = useNavigate();
  const [state,setState] = useState({
    fname:"",
    lname:"",
    phone:"",
    email:"",
    job:"",
    add:""
  });

  const setvalue =(e)=>{
    const {name,value} = e.target
    setState({...state,[name]:value})
  }

  const getdata =async()=>{
    try{
      const res = await fetch(`http://localhost:8000/user/${id}`,{
            method:"GET",
            headers:{
              'Content-Type':'application/json'
            }
          });
          const responce = await res.json();
          if(res.status === 422){
             console.log("invalid")
          }else{
             console.log("rendering successful");
            setState(responce)
          }
        }catch(e){
           console.log('error')
        }
  }
  useEffect(()=>{
    getdata();
  },[]);
  
const onchange = async(e) =>{
  e.preventDefault();
  const {fname,lname,phone,email,job,add} = state;
  try{
  const res = await fetch(`http://localhost:8000/edit/${id}`,{
    method:'PATCH',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      fname,lname,phone,email,job,add
    })
  });
  const responce = await res.json();
  if(res.status === 422){
     console.log("invalid")
  }else{
     console.log("rendering successful");
    setState(responce);
    nav('/')
  }
}catch(e){
   console.log('error')
}
}

  return (
    <form method='POST'>
    <small className="form-text text-muted">We'll never share your data with anyone else.</small>
    <div className="form-group">
    <label >First Name</label>
    <input type="text" className="form-control"  placeholder="Enter First Name" onChange={setvalue} value={state.fname} name="fname"/>
  </div>
  <div className="form-group">
    <label >Last Name</label>
    <input type="text" className="form-control"  placeholder="Enter Last Name" onChange={setvalue} value={state.lname} name="lname"/>
  </div>
  <div className="form-group">
    <label >Phone Number</label>
    <input type="number" className="form-control"  placeholder="Enter Phone Number" onChange={setvalue} value={state.phone} name="phone"/>
  </div>
  <div className="form-group">
    <label >Email address</label>
    <input type="email" className="form-control"  placeholder="Enter Email address" onChange={setvalue} value={state.email} name="email"/>
  </div>
  <div className="form-group">
    <label >Job Perofile</label>
    <input type="text" className="form-control" placeholder="Enter Job Perofile" onChange={setvalue} value={state.job} name="job"/>
  </div>
  <div className="form-group">
    <label >Address</label>
    <input type="text" className="form-control" placeholder="Enter Address" onChange={setvalue} value={state.add} name="add"/>
  </div>
  <button type="submit" className="btn btn-primary mt-3" onClick={onchange}>Edit</button>
</form>
  )
}

export default Edit