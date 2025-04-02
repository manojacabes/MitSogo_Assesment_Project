import React from 'react'
import './Tabs.css'

const AsamKiosk = () => {
    return (
        <div className='SingleApp'>
            <div className='SingleAppContent'>
                <div className='head'>
                    <h3 className='head1'>
                        Unlock the power of Autonomous Single App Mode (ASAM)
                    </h3>
                    <p className='head2'>
                        A feature that empowers your iOS app to seamlessly secure itself in the foreground.
                    </p>
                    <p className='head2'>
                        Transform tablets or devices into dedicated point-of-sale (POS) systems by preventing interruptions from other applications or notifications.
                    </p>
                    <p className='head2'>
                        Create focused, efficient and secure digital environments to match your requirements.
                    </p>
                    <p className='head2'>
                        Configure ASAM effortlessly and elevate your user experience like never before.
                    </p>
                </div>
                <div className='image'>
                    <img className='tabsImage' src={'https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fhexnode-kiosk%2Fasam-kiosk-image.jpg&w=640&q=100'} alt='loading...' />
                </div>

            </div>

        </div>
    )
}

export default AsamKiosk;