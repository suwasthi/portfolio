import React from 'react'
import './Header.css'
import my_img from '../../assets/my_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import myResume from '../../assets/myResume.pdf'; // Import your resume PDF // for open in new tab the cv text-decoration: none;

const Header = () => {

  const handleResumeClick = (e) => {
    e.preventDefault(); // Prevent default behavior
    window.location.href = myResume; // Open the PDF in the same tab
  
    // Save the current page URL in sessionStorage
    sessionStorage.setItem("previousPage", window.location.href);
  };
  
  return (
    <div id='home' className= 'Header'>
        <img src={my_img}  className="round-image"/>
        <h1><span>I'm Suwasthiga Nagendramoorthy</span></h1>
        <p>I'm an undergraduate student of Computer Science and Engineering at the University of Moratuwa, passionate about technology, problem-solving, and innovation.</p>
         <div className="Header-action">
            <div className="Header-connect"><AnchorLink className='anchor-link' offset={50} href='#Contact'>Connect with me</AnchorLink></div>
            <div className="Header-resume">
            <a href={myResume} id="resume-link" onClick={(e) => handleResumeClick(e)}>My Resume</a>  
            </div>
         </div>
    </div>
  )
}

export default Header