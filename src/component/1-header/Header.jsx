import React, { useEffect, useState } from 'react'
import './header.css';
// import { Link } from 'react-router-dom';
import { Link } from "react-scroll";
import Lottie from "lottie-react";
import verifyAnimation from "../../Animation/Animation - 1734466046317.json"
export default function Header() {

  let [showModal, setShowModal] = useState(false)
  let [theme, setTheme] = useState(localStorage.getItem("themeState") || "dark")
  let [sun, setSun] = useState("moon")


  useEffect(() => {
    document.body.classList.remove("dark", "light");
    document.body.classList.add(theme)
    localStorage.setItem("themeState", theme);

  }, [theme]);

  return (

    <>
      <header className='container my-4'>
        <nav className="d-flex justify-content-between">


          <div className=" light-Button btn-menu text-center d-flex justify-content-center align-items-center" onClick={() => { setShowModal(true) }}>

            <i className="pt-2 icon fa-solid fa-bars"> </i>


          </div>
          <div className='aaa m-auto d-flex align-items-center'>

            <div className="navItems me-auto">
              <li className="">
                <Link className="nav-link" to="Hero">About</Link>
              </li>
              <li className="">
                <Link className="nav-link" to="skills">Skills</Link>
              </li>
              <li className="">
                <Link className="nav-link" to="projects" >Projects</Link>
              </li>
              <li className="">
                <Link className="nav-link" to="contact">Contact</Link>
              </li>
            </div>


          </div>
          <Lottie className='lottie' loop={false} style={{ height: 35 }} animationData={verifyAnimation} />
          <div className='light-Button d-flex justify-content-center'>
            <button onClick={() => {
              if (document.body.classList.contains("dark"))
                setTheme("light")

              else { setTheme("dark") };
            }} className="btn"><i className={`fa-regular ${theme === "dark" ? "fa-moon" : "fa-sun"}`}></i></button>
          </div>
        </nav>
        {showModal && (
          <div className="popup-bg">
            <div className='popup container w-75'>
              <div className='close-btn w-100 d-flex justify-content-end '>
                <button className="btn text-center " onClick={() => { setShowModal(false) }}><i className="fa-solid fa-xmark "></i></button>
              </div>

              <ul className='p-2'>

                <li className="">
                  <Link className="nav-link" to="about" onClick={() => { setShowModal(false) }}>About</Link>
                </li>
                <hr />
                <li className="">
                  <Link className="nav-link" to="skills" onClick={() => { setShowModal(false) }}>Skills</Link>
                </li>
                <hr />
                <li className="">
                  <Link className="nav-link" to="projects" onClick={() => { setShowModal(false) }}>projects</Link>
                </li>
                <hr />
                <li className="">
                  <Link className="nav-link" to="contact" onClick={() => { setShowModal(false) }}>Contact</Link>
                </li>
                <hr />

              </ul>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
