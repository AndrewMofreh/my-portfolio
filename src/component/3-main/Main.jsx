import React, { useState } from 'react'
import './main.css'
// import { animate, scroll } from "motion"
import { AnimatePresence, motion } from "motion/react"
import { Element } from "react-scroll";
import { useNavigate } from 'react-router-dom';
export default function Main() {
  let [card, setCard] = useState([])
  const cards = [
    { id: 4, title: "React.js", category: "react", disc: "A movies website that contain  a full validation system for regesteration and login also connected to an api to keep the user up to date with the lastest movies", image: "moviesweb.PNG", link: "https://movies-api-project.vercel.app/" },
    { id: 3, title: "js", category: "js", disc: "A crud system web app that can be used to create , read, update, and delete products for any store", image: "crudsystem.PNG", link: "https://crud-system-ivory.vercel.app/" },
    { id: 1, title: "Css & HTML portfolio 2", category: "Html & Css", disc: "A responsive portfolio made using Html and Css with bootstrap", image: "secondportfolio.PNG", link: "https://portfolio-demo-2-zeta.vercel.app/" },
    { id: 2, title: "Css & HTML portfolio", category: "Html & Css", disc: "A portfolio which is made using simple Html and Css", image: "firstportfolio.PNG", link: "https://portfolio-demo-1.vercel.app/" },

  ];
  let [CurrentActive, setCurrentActive] = useState('')
  let newCards = [...cards];
  let [arr, setArr] = useState(newCards)
  let navigate = useNavigate()


  function filterhandel(cat) {
    let aa = newCards.filter((project) => { return project.category === cat })
    setArr(aa)
  }



  return (
    <Element name="projects">



      <div className='m-3' id='projects'>

        <div className="main container d-flex g-3">
          <div className="row">
            <div className="left-Sec col-md-2 d-flex flex-column">
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => {
                  setCurrentActive("all")
                  setArr(cards)
                }} className={`${CurrentActive === "all" ? "active" : ""} btn  mb-3`}>All Projects</motion.button>
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => {
                  setCurrentActive("Html & Css")
                  filterhandel("Html & Css")
                }} className={`${CurrentActive === "Html & Css" ? "active" : ""} btn  mb-3`}>HTML & CSS</motion.button>
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => {
                  setCurrentActive("java")
                  filterhandel("js")
                }} className={`${CurrentActive === "java" ? "active" : ""} btn  mb-3`}>JavaScript</motion.button>
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => {
                  setCurrentActive("react")
                  filterhandel("react")
                }} className={`${CurrentActive === "react" ? "active" : ""} btn  mb-3`}>React</motion.button>
            </div>

            <div className="right-Sec col-md-10">
              {/* Cards */}
              <div className="row g-3">
                <AnimatePresence>

                  {arr.map((_, category) => (

                    <motion.div
                      layout
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      transition={{ stiffness: 100, type: "spring", damping: 8 }}
                      key={_.id} className="col-md-4"
                    >

                      <div className="project p-3">
                        <a href={_.link}>
                          <img src={_.image} alt="" className='w-100' />
                        </a>
                        <h2>{_.title}</h2>
                        <p>{_.disc}</p>
                        <div className='d-flex justify-content-between'>
                          <div>
                            {/* <i className="fa-brands fa-github"></i> */}
                          </div>
                          <a href={_.link}>
                            <span>Take a look</span>
                            <i className="fa-solid fa-link ps-2 pt-2"></i>
                            {/* <i className="fa-solid fa-arrow-right ps-2 pt-2"></i> */}
                          </a>
                        </div>
                      </div>
                    </motion.div>

                  ))}

                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  )
}
