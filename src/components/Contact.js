import React from "react";


import Form from './Form'

export default function Contact() {


  return (
    <div className="component">
      <div className="component-title">
        <h2>Contact Me</h2>
      </div>
      <nav className="component-info">
        <div className= "iconbox">
          <ul>
            <li>
              <div>
                <a href="tel:+6281196907515" rel="noopener noreferrer" >
                  <i className="fa-solid fa-phone fa-2x"></i>
                  </a>

              </div>
            </li>

            <li>
              <div>
                <a href="mailto:kylie_gilbert13@yahoo.com.au" rel="noopener noreferrer">
                 
                  <i className="fa-solid fa-at fa-2x"></i>
                </a>
              
              </div>
            </li>

            <li>
              <div>
                

                <a target="_blank" href="https://github.com/kyliegilbert" rel="noopener noreferrer">
                
                  <i className="fa-brands fa-github fa-2x"></i>
                </a>
                
                
              </div>
            </li>

            <li>
              <div >
                <a target="_blank" href="https://www.linkedin.com/in/kylie-gilbert-2306b9230/" rel="noopener noreferrer">
                  {/* Linkedin */}
                  <i className="fa-brands fa-linkedin fa-2x"></i>
                </a>
            
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <Form/>
    </div>
  )
}