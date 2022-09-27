import React from 'react'
import {NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
  <div className="container-fluid">
    <NavLink className="navbar-brand ms-5" to="/"><i className="bi bi-person-badge"></i>Employee Dashboard</NavLink>
    <div id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto me-5 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" to="/adduser"><button className='btn btn-outline-light'>Add Employee</button></NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar