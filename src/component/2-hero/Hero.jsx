import React from 'react'
import './hero.css';
import Lottie from "lottie-react";
import developAnimation from "../../Animation/Animation - 1734547780664.json"
import { animate } from 'motion';
import { motion } from 'motion/react';
import { Link } from 'react-scroll';


export default function Hero() {
  return (
    <div className='container hero'>
      <div className="row d-flex">

        <div className="profile col-md-5 m-3 d-flex">
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ damping: 3, type: "spring", duration: 1 }}
            className="profile-Pic" src="/My-portfolio/me-round.png" alt="Profile" />
        </div>

        <div className="about col-md-8 ">
          <h1>React frontend developer</h1>
          <p className='mt-4 disc w-75'>
            I’m Andrew, a self-motivated and detail-oriented frontend developer with hands-on experience in crafting dynamic, responsive web applications. I have a strong foundation in React.js, JavaScript, HTML5, and CSS3, along with a keen understanding of agile methodologies like Scrum.
            <br />
            <br />My journey in web development has been shaped by rigorous training, including the prestigious Digital Egyptian Generations Scholarship and FWD Web Development Program, where I built scalable applications and honed my problem-solving skills.
            <br />
            <br />Beyond coding, I enjoy collaborating with teams, sharing knowledge, and continuously learning to stay ahead in the ever-evolving tech landscape. I am always open to exciting projects and opportunities that challenge me to grow further!
          </p>

          <Link to='contact'>
            <button className='hiremebtn'>Hire me</button>
          </Link>

          <a href='https://drive.google.com/file/d/1fvlfAjtsGjedu3CiKUN0AI3jyx2C4SI8/view?usp=sharing'>
            <button className='downloadbtn'>Download CV
              <i class="fa-solid fa-download"></i>
            </button>
          </a>
        </div>

        <div className="animate col-md-4 ">
          <Lottie className='anim' animationData={developAnimation} />
        </div>
      </div>
      <div className="social-icons">
        <div className='shadowbox'>
          <a href="https://github.com/AndrewMofreh" target="_blank" rel="noopener noreferrer" className="github">
            <i className="fab fa-github"></i>
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/andrew-mofreh/" target="_blank" rel="noopener noreferrer" className="linkedin">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  )
}
