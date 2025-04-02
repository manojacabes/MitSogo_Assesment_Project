import React, { useState } from 'react';
import logo from '../assets/hexnode-vector-logo.svg';
import logoBlack from '../assets/hexnode-vector-logo-black.svg'

import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const [color, setcolor] = useState(false)
    const closeMenu = () => setClick(false)
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setcolor(true)
        } else {
            setcolor(false)
        }
    }
    window.addEventListener('scroll', changeColor)
    return (
        <div className={color ? 'header header-bg' : 'header'}>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <img src={color ? logoBlack : logo} alt='logo' />
                </a>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <a href='#demo' onClick={closeMenu}>
                        <button className='freetrial'>
                            14 DAY FREE TRIAL
                        </button>
                    </a>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar