import React, { useEffect, useState } from 'react'
import './skills.css'
import { Element } from 'react-scroll';


export default function Skills() {
    let[percent, setPercent] = useState(0)
    let skills =[
        {id:1,label: "HTML", percent: 90},
        {id:2,label: "Css", percent: 95},
        {id:3,label: "Js", percent: 70},
        {id:4,label: "React.js", percent: 80},
        {id:5,label: "Photoshop", percent: 50},
        {id:6,label: "Figma", percent: 45},
    ]



   function counterHandle(pers){
let currentPercent = 0
let interval =  setInterval(() => {

    currentPercent +=1;
    setPercent(currentPercent);

    if (currentPercent >= pers){
        clearInterval(interval)
    }
}, 20);

}



  return (
    <Element name="skills">
        <div id='skills'>
            <div className='container skills'>
                <div className='row'>
                    {skills.map((skill, id)=>(

                    <div className='col-md-6' key={skill.id}>
                        <div className='skill' >
                            <p>
                                {skill.label}
                            </p>
                            <div className='outer'>
                                <div className='bar' style={{ width:`${skill.percent}%`, height: 15 }} >
                                    <div className='fill'>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    </Element>
  )
}
