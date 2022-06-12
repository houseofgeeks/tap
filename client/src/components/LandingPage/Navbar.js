import React, { useState } from "react";
import "./styling/navbar.css"
import {BiMenuAltLeft } from 'react-icons/bi';

import { useRef } from "react";


export default function Navbar() {
    const nav=useRef();
    const start=useRef();
    // const home=useRef();
    // const item=useRef([]);
    
    var [myvalue,setmyvalue]=useState({
        active:null,
        objects:[
            {id:1,
            title:"Home"},{id:2,title:"Why IIIT Ranchi"},{id:3,title:"Past Rect."},{id:4,title:"Stats"},{id:5,title:"Contact Us"}
            
        ]
    })

    
   


function style(index){
    if(myvalue.objects[index]===myvalue.active){
        return "activer"
    }
    else{
        return "inactive"
    }
}
function showMenu(){

nav.current.classList.toggle("active");


}
function toggleActive(index){
    setmyvalue({...myvalue, active:myvalue.objects[index]})
}
    return (
        <div className="NavMenu">
            <BiMenuAltLeft  ref={start}className="logo " onClick={showMenu}/>
            <ul className="Nav" ref={nav}>
           {
               myvalue.objects.map(function(item,index){
                   return(
<li key={index} className={style(index)} onClick={()=>{toggleActive(index)}}><a href="#"> {item.title}</a></li>

               

               
        )})}
          </ul>
        </div>
    )
}