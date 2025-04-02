import React, { useState } from 'react'
import './Hero.css'

const Hero = () => {
    const [email, setEmail] = useState();
    const onChange = (e) => {
        setEmail(e.target.value)
    }
    console.log('email :', email)
    return (
        <div className='hero'>
            <div className='content'>
                <div className='section1'>
                    <h1 className='para1'>
                        Turn your devices into kiosk in a few minutes With Hexnode UEM
                    </h1>
                    <div>
                        <input
                            type='email'
                            name='email'
                            className='inputEmail'
                            value={email}
                            onChange={onChange}
                            placeholder='Your Work Email'>
                        </input>
                        <button href='/' className='getButton'>GET STARTED NOW!</button>
                    </div>
                </div>
                <div >
                    <img className='section2' src={'https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fbanner%2Fhexnode-kiosk.png&w=640&q=95'} alt='loading...' />
                </div>

            </div>

        </div>
    )
}

export default Hero