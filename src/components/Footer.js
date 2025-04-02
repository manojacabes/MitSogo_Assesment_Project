import React, { useState } from 'react'
import './Footer.css'

const Footer = () => {
    const [email, setEmail] = useState();
    const onChange = (e) => {
        setEmail(e.target.value)
    }
    console.log('email :', email)
    return (
        <>
            <div className='footer'>
                <div className='section1'>
                    <h1 className='footerHead' >
                        Sign up and try Hexnode free for 14 days!
                    </h1>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <input
                            type='email'
                            name='email'
                            className='inputEmail'
                            value={email}
                            onChange={onChange}
                            placeholder='Your Work Email'>
                        </input>
                        <button href='/' className='getButton'>  GET STARTED  </button>
                    </div>
                    <p className='footerText'>
                        No credit cards required.<span style={{ color: '#DD0735' }}>Request a demo </span>
                    </p>
                </div>
            </div>
            <div className='footerContent'>
                <div className='baseFooter'>
                    Terms of Use - Privacy - Cookies
                </div>
                <div className='baseFooter'>
                    Copyright © 2025 Mitsogo Inc. All Rights Reserved.
                </div>
            </div>
        </>
    )
}

export default Footer