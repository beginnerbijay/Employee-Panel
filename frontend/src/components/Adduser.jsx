import React, { useState } from 'react'
import { useNavigate } from 'react-router';

const Adduser = () => {
  const nav = useNavigate();
  const [state,setState] = useState({
    fname:"",
    lname:"",
    sex:"",
    age:"",
    salary:"",
    phone:"",
    email:"",
    job:"",
    add:""
  });

  const setvalue =(e)=>{
    const {name,value} = e.target
    setState({...state,[name]:value})
  }

  const onsubmit=async(e)=>{
    e.preventDefault();
    const {fname,lname,sex,age,salary,phone,email,job,add} = state;
    try{
      if(fname && lname &&  sex && age && salary && phone && email && job && add){
        const res = await fetch("http://localhost:8000/adduser",{
          method:"POST",
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({
            fname,lname,sex,age,salary,phone,email,job,add
        })
        });
        const responce = res.json();
        console.log(responce)
        if(res.status === 422){
          alert("invalid")
        }else{
          alert("registration successful");
          nav("/")
        }
      }
    }catch(e){
      res.status(422).json("invalid at front");
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
  <div className="form-group" style={{marginTop:5}}>
      <label>
        Sex
        <select value={state.sex} onChange={setvalue} name="sex" style={{marginLeft:10}}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>
    </div>
    <div className="form-group">
    <label >Age</label>
    <input type="number" className="form-control"  placeholder="Enter Age" onChange={setvalue} value={state.age} name="age"/>
  </div>
    <div className="form-group">
    <label >Salary</label>
    <input type="number" className="form-control"  placeholder="Enter Salary" onChange={setvalue} value={state.salary} name="salary"/>
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
  <button type="submit" style={{width:400}} className="btn btn-primary mt-2" onClick={(e)=>onsubmit(e)}>Submit</button>
</form>
  )
}

export default Adduser