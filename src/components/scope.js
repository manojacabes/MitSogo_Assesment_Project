import React from 'react'
import './Scope.css'

const Scope = () => {

    return (
        <div className='hexNodeList'>
            <div className='contents'>
                <div style={{ padding: '0px' }}>
                    <img style={{ width: '80px' }} src={'https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Faccolades%2Fidc.png&w=96&q=75'} alt='loading...' />
                    <p className='hexPara'>Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors Assessment Reports 2024.</p>
                </div>
                <div className='vl'></div>
                <div style={{ padding: '0px' }}>
                    <img style={{ width: '110px' }} src={'https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Faccolades%2Fgartner.png&w=128&q=75'} alt='loading...' />
                    <p className='hexPara'>Hexnode was recognized in the 2025 Gartner® Market Guide for Unified Endpoint Management Tools.</p>
                </div>
                <div className='vl'></div>
                <div style={{ padding: '0px' }}>
                    <img style={{ width: '150px' }} src={'https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Faccolades%2Fforrester.png&w=256&q=75'} alt='loading...' />
                    <p className='hexPara'>Forrester includes Hexnode as a Notable vendor in The Unified Endpoint Management Landscape, Q3 2023.</p>
                </div>
            </div>
        </div>
    )
}

export default Scope;