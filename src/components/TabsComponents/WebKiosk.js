import React, { useState } from 'react'
import './Tabs.css'

const WebKiosk = () => {
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
                        Explore the new way to manage web apps and websites
                    </h3>
                    <p className='head2'>
                        Let users access essential and approved web apps, website and files only.
                    </p>
                    <p className='head2'>
                        Make the best use of website kiosk with Hexnode's advanced settings.
                    </p>
                    <p className='head2'>
                        Tailor your experience to match your unique use case.
                    </p>
                    <p className='head2'>
                        From configuring toolbar options to scheduling page refresh, remote debugging, and limiting incognito tabs, take full control of your website kiosk experience.
                    </p>
                </div>
                <div className='image'>
                    <img className='tabsImage' src={'https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fhexnode-kiosk%2Fweb-based-kiosk-image.jpg&w=640&q=100'} alt='loading...' />
                </div>

            </div>

        </div>
    )
}

export default WebKiosk;