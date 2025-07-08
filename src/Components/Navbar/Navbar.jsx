import React, { useState , useRef} from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { FaBars, FaTimes } from 'react-icons/fa';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {
  const [menu, setMenu] = useState("home")
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }

  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  }

  
  return (
    <div className="navbar">
      <img src={logo} className='nav-logo'/>
      <FaBars className='nav-mob-open' onClick={openMenu}  size="30px"/>
        <ul ref={menuRef} className="nav-menu">
            <FaTimes className='nav-mob-close'   size="30px" onClick={closeMenu}/>
            <li><AnchorLink className='anchor-link' href='#home'><p className={menu === "home" ? "active" : ""} onClick={() => setMenu("home")}>Home</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#About'><p className={menu === "About" ? "active" : ""} onClick={() => setMenu("About")}>About</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#Achievements'><p className={menu === "Achievements" ? "active" : ""} onClick={() => setMenu("Achievements")}>Achievements</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#MyProject'><p className={menu === "MyProject" ? "active" : ""} onClick={() => setMenu("MyProject")}>Works</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#Contact'><p className={menu === "Contact" ? "active" : ""} onClick={() => setMenu("Contact")}>Contact</p></AnchorLink></li>

        </ul>
        <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#Contact'>Connect With Me</AnchorLink></div>

    </div>
  )
}

export default Navbar