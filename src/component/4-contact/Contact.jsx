import React from 'react'
import './contact.css'
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import doneAnimation from "../../Animation/Animation - 1734465966616.json"
import contactAnimation from "../../Animation/Animation - 1734546723281.json"
import developAnimation from "../../Animation/Animation - 1734547780664.json"
import { Element } from 'react-scroll';
export default function Contact() {


  const [state, handleSubmit] = useForm("xanygodk");


  return (
    <Element name='contact'>


      <div className='container content' id='contact'>
        <div className="whole-content row">
          <section className="col-md-8 left ">
            <h2 className='m-3'>
              <i class="fa-solid fa-envelope me-2"></i>
              Contact me</h2>
            <p className='mb-5 p-3 cont-color'>Contact me for more information and to get notified for any new updates</p>
            <form className='d-flex flex-column' onSubmit={handleSubmit}>
              <div className='p-3'>
                <label className='pe-4 cont-color' htmlFor="email"> Email Address: </label>
                <input className='' id="email" type="email" name="email" placeholder='  Your Email' />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
              <div className='p-3 d-flex'>
                <label className='pe-4 cont-color'> Your message:</label>
                <textarea className='w-75' placeholder='  Message' name='message'></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>
              <div className='p-3'>
                <button type='submit' className='btn btn-dark' disabled={state.submitting}>Send</button>

                {state.succeeded && <div className='d-flex mt-3'>
                  <Lottie loop={false} style={{ height: 100 }} animationData={doneAnimation} />
                  <p className='pt-2'>Your message has been sent successfully </p>
                </div>
                }
              </div>

            </form>
          </section>

          <section className="col-md-4 right d-flex align-items-center justify-content-center">
            <div><Lottie className='contactAnim' style={{}} animationData={contactAnimation} /></div>
          </section>
        </div>


      </div>
    </Element>
  )
}
