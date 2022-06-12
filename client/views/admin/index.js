import "../admin/adminstyle.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "./UserActions";



export default function Admin() {

  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();


  const loginHandler = (e) => {
    e.preventDefault();

    dispatch(loginUser(username, password));
  };
    return (
    <>
      <div className="header">
        <h1>Admin Login</h1>
      <form onSubmit={loginHandler}>
      <div className="container">
           <label htmlFor="username" className="labeltext" >
             Username
           </label>
           <input name="username" placeholder="username" id="username" type="text" value={username} onChange={(e) => setusername(e.target.value)} >
           </input>
           <label htmlFor="password"  className="labeltext">
             Password
           </label>
           <input name="password" type="password" id="password" placeholder="password" required value={password} onChange={(e) => setPassword(e.target.value)}></input>
           <button type="submit">Login</button>
      </div>
      </form>
      </div>
      </>
    );
  };
  
  