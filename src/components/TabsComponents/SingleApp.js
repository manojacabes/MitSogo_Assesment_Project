import React, { useState } from 'react'
import './Tabs.css'

const SingleApp = () => {
    const [email, setEmail] = useState();
    const onChange = (e) => {
        setEmail(e.target.value)
    }
    console.log('email :', email)
    return (
        <div className='SingleApp'>
            <div className='SingleAppContent'>
                <div className='head'>
                    <h3 className='head1'>
                        Powerful Single-App Kiosk solutions for enhanced control
                    </h3>
                    <p className='head2'>
                        Provision the devices to run one specialized application, with limited functionalities.
                    </p>
                    <p className='head2'>
                        Customize the device settings to cater to a specific use-case each time.
                    </p>
                    <p className='head2'>
                        Use Hexnode’s Advanced Kiosk settings for additional restrictions or expanded device functionalities while in kiosk mode.
                    </p>
                    <p className='head2'>
                        Empower your administrators with full control over the kiosk devices.
                    </p>
                </div>
                <div className='image'>
                    <img className='tabsImage' src={'https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fhexnode-kiosk%2Fsingle-app-kios-image.jpg&w=640&q=100'} alt='loading...' />
                </div>

            </div>

        </div>
    )
}

export default SingleApp;