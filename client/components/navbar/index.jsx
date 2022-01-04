import { Typography, Box } from '@mui/material'
import React,{useState} from 'react'

export default function Navbar({navStatus,setNavStatus}) {
    return (
        <nav>
          <div className="upperNav">
            <div className="logo">
              <img
                src="https://github.com/IIITians-Network/IIIT-Ranchi/blob/master/img/iiit_logo/ranchi.png?raw=true"
                alt="logo"
              />
            </div>
            <div className="clg-name">
              <h1>INDIAN INSTITUTE OF INFORMATION TECHNOLOGY, RANCHI</h1>
              <h2 className="tpoFont">Training and Placement Cell</h2>
            </div>
            <div className={`burger ${navStatus?"toggle":""}`} onClick={()=>setNavStatus(!navStatus)}>
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
          </div>
    
          <ul className={`nav-links ${navStatus?"nav-active":""}`} >
            <li>
              <a href="#home">
                <div className="home">HOME</div>
              </a>{" "}
            </li>
            <li>
              <a href="#aboutUs">
                <div>ABOUT US</div>
              </a>{" "}
            </li>
            <li>
              <a href="#academics">
                <div>ACADEMICS</div>
              </a>{" "}
            </li>
            <li>
              <a href="#forRecruiters">
                <div>FOR RECRUITERS</div>
              </a>{" "}
            </li>
            <li>
              <a href="#statistics">
                <div>PLACEMENT STATISTICS</div>
              </a>{" "}
            </li>
            <li>
              <a href="#contact">
                <div>CONTACT US</div>
              </a>{" "}
            </li>
          </ul>
        </nav>
      );
}
