import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginCustomer } from "../Services/auth.service";
import { Link } from "react-router-dom";
function Login() {

 const  navigate = useNavigate()
  const [input,setInput]=useState({
    email:" ",
    password:" "
  })
 
  
  const loginuser = async (e) =>{
    e.preventDefault();
    const apiResponse=await loginCustomer(input.email,input.password)
    console.log(apiResponse.data);
    if(apiResponse.data.status){
      navigate("/Popup")
      localStorage.setItem("user",JSON.stringify(apiResponse.data.result))
      localStorage.setItem("token",JSON.stringify(apiResponse.data.token))

    }
  }

  const inputHandler= (e)=>{
    const {name,value}=e.target
    setInput((preValue)=>({
      ...preValue,
      [name]:value
    }))
    //console.log(input)
  }

  return(
    <>
    <div className="container">
      <div className="row">
        <div className="col-md-4">
    <form>
    <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
    onChange={(e)=>inputHandler(e)}/>
   
  </div>
    
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input
    name="password" 
    
    class="form-control" 
    id="exampleInputPassword1" 
    placeholder="Password" onChange={(e)=>inputHandler(e)}/>
  </div>

  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  

  <button type="submit" class="btn btn-primary" onClick={loginuser}>Submit</button>
  <h3>
  <Link class="nav-link" to="/form">New User</Link>

        </h3>
 
</form>
</div>
</div>
</div>
    </>
  )
  
  }

  export default Login