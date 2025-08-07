import React from 'react'
import { CgProfile } from "react-icons/cg";
import { BsHighlights } from "react-icons/bs";
import { MdHistoryToggleOff } from "react-icons/md";
import { LiaVideoSolid } from "react-icons/lia";
import { NavLink } from "react-router-dom";
import "./insta_fun.css"

const Insta_fun = () => {
  return (
       <div className='insta-fun-container'>
    
            <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          end
        >
          <div className='my-flex insta-fun'>
          <span style={{marginTop:"5px"}}><LiaVideoSolid /> </span> <span>Video</span>
            </div>
        </NavLink>
    
     {/* <NavLink
          to="/insta_profile"
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          end
        >
             <div className='my-flex insta-fun'>
               <span style={{marginTop:"5px"}}><CgProfile /> </span> <span>Dp<sup>Beta</sup></span>
            </div>
    </NavLink> */}

          <NavLink
          to="/insta_story"
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          end
        >
              <div className='my-flex insta-fun'>
               <span style={{marginTop:"5px"}}><MdHistoryToggleOff /></span> <span>Story<sup>Beta</sup></span>
            </div>
          </NavLink>

     <NavLink
          to="/insta_highlights"
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          end
        >
              <div className='my-flex insta-fun'>
               <span style={{marginTop:"5px"}}><BsHighlights /></span> <span>Highlights<sup>Beta</sup></span>
            </div>
           </NavLink>


            
           </div>
  )
}

export default Insta_fun