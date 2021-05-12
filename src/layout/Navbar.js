import React from 'react'
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Navbar({title}) {
 

  return (
    


    <nav className="navbar-nav navbar-expand-lg navbar-dark bg-dark mb-3 p-3">
      <a href="/" className="navbar-brand">{title}</a>

      <ul className="navbar-nav ml-auto" >
        <li className="nav-item active">
          <Link to = "/" className = "nav-link" >Table</Link>
          <div ></div>
        </li>
        <li className="nav-item active">
          <Link to = "/add" className = "nav-link">Data Add</Link>
       </li>
       <li className="nav-item active">
          <Link to = "/edit/:id" className = "nav-link">Data Update</Link>
       </li>
       <li className="nav-item active">
          <Link to = "/Table" className = "nav-link">Language Training</Link>
       </li>
       
       
       
      
      </ul>
    
    </nav>
    
  )
}

Navbar.propTypes = {
  title : PropTypes.string.isRequired
}
Navbar.defaultProps = {
  title : "Default App"
}
export default Navbar;
