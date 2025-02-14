import React from 'react'
import './footer.css'
import { Link } from 'react-scroll';

export default function Footer() {
  return (
    <footer className=' container '>
      <div className=' footer-content d-flex justify-content-between m-5'>

        {/* ul>(li>a)*4  dh e5tsar lktabet ally t7t */}
        <ul className='d-flex'>
          <li><Link to="about" className="nav-Link">About</Link></li>
          <li><Link to="skills" className="nav-Link">Skills</Link></li>
          <li><Link to="projects" className="nav-Link">Projects</Link></li>
          <li><Link to="contact" className="nav-Link">Contact</Link></li>
        </ul>

        <p>© 2024 Andrew mofreh. All rights reserved.</p>

      </div>

    </footer>
  )
}
