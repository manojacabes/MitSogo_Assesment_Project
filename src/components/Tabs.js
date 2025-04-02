import React, { useRef } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import SingleApp from './TabsComponents/SingleApp';
import MultiApp from './TabsComponents/MultiApp';
import WebKiosk from './TabsComponents/WebKiosk';
import DigitalSign from './TabsComponents/DigitalSign';
import AsamKiosk from './TabsComponents/AsamKiosk';
import './Scope.css';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

const Tabs = () => {
    const [value, setValue] = React.useState('1');
    const [swiperRef, setSwiperRef] = React.useState(null);
    const [expandValue, setExpandValue] = React.useState(1)
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    // const onAutoplayTimeLeft = (s, time, progress) => {
    //     progressCircle.current.style.setProperty('--progress', 1 - progress);
    //     progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    // };
    React.useEffect(() => { }, [expandValue])
    return (
        <div className='tabs'>
            <div className='tabsContent'>
                <h2 className='tabsh2'>Specific kiosk modes for unique use cases  </h2>

                <div className='tabsContainer'>
                    <Box sx={{ width: '100%', typography: 'body1' }}>
                        <TabContext value={value}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <TabList onChange={handleChange} aria-label="lab API tabs example">
                                    <Tab label="Single App Kiosk" value="1" />
                                    <Tab label="Multi-App Kiosk" value="2" />
                                    <Tab label="Web-based Kiosk" value="3" />
                                    <Tab label="Digital Signages" value="4" />
                                    <Tab label="ASAM Kiosk" value="5" />
                                </TabList>
                            </Box>
                            <TabPanel value="1"><SingleApp /></TabPanel>
                            <TabPanel value="2"><MultiApp /></TabPanel>
                            <TabPanel value="3"><WebKiosk /></TabPanel>
                            <TabPanel value="4"><DigitalSign /></TabPanel>
                            <TabPanel value="5"><AsamKiosk /></TabPanel>
                        </TabContext>
                    </Box>
                </div>
            </div>
            <h2 className='tabsh2'>What additional possibilities does the Kiosk mode offer?</h2>
            <div className='additionalSection'>
                <div className='contentss'>
                    <div>
                        <img className='addImageText' src={'https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fkiosk-mode%2F2x%2Feffortless-kiosk-deployement-image.jpg&w=640&q=80'} alt='loading...' />
                    </div>
                    <div style={{ padding: window.innerWidth <= 1240 ? '0px 20px' : '0px 50px' }}>
                        <h3 className='addHead' onClick={() => setExpandValue(1)}>
                            Effortless kiosk deployment & management
                        </h3>
                        {expandValue === 1 && <> <p className='addPara'>
                            Deploy kiosk-enabled devices straight out of the box. Flash a custom Android Enterprise, Samsung Knox or ROM with Hexnode App on the devices by collaborating with OEM vendors who provide specially configured ROMs.
                        </p>
                            <button className='addButton'>
                                TRY FOR FREE
                            </button></>}
                        <h3 className='addHead' onClick={() => setExpandValue(2)}>
                            Customized interface for brand visibility
                        </h3>
                        {expandValue === 2 && <> <p className='addPara'>
                            Create a locked-down environment with customized interface. Maximize brand visibility and leave a lasting impression by showcasing products, services and key messages directly to users through the customized interface.
                        </p>
                            <button className='addButton'>
                                TRY FOR FREE
                            </button></>}
                        <h3 className='addHead' onClick={() => setExpandValue(3)}>
                            What more can you do with Hexnode kiosk?
                        </h3>
                        {expandValue === 3 && <> <p className='addPara'>
                            Ensure compliance of your devices by remotely deploying the latest OS version while the device is still in kiosk mode. Prevent your data from falling into the wrong hands even in case of device loss/theft with the various remote management features.
                        </p>
                            <button className='addButton'>
                                TRY FOR FREE
                            </button></>}
                        <h3 className='addHead' onClick={() => setExpandValue(4)}>
                            Secure and update your app ecosystem
                        </h3>
                        {expandValue === 4 && <> <p className='addPara'>
                            Streamline the deployment and management on apps on your kiosk devices. Save your time and effort, ensure security and improve your efficiency using Hexnode’s silent app installation and update features.
                        </p>
                            <button className='addButton'>
                                TRY FOR FREE
                            </button></>}
                        <h3 className='addHead' onClick={() => setExpandValue(5)}>
                            Provide an easy-to-use interface for end-users
                        </h3>
                        {expandValue === 5 && <> <p className='addPara'>
                            Give your end-users the power to control their devices without overwhelming them with options. An intuitive interface to let them access only the essential settings they need. Make it easy for them to unlock the full potential of your devices hassle-free.
                        </p>
                            <button className='addButton'>
                                TRY FOR FREE
                            </button></>}
                    </div>
                </div>

            </div>

            <div className='hexnode'>
                <h2 className='tabsh2'>Why should you choose Hexnode?</h2>
                <div className='swip'>
                    <Swiper
                        onSwiper={setSwiperRef}
                        slidesPerView={1}
                        centeredSlides={true}
                        pagination={{
                            type: 'fraction',
                        }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        navigation={true}
                        modules={[Autoplay, Navigation]}
                        // modules={[Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className='sliderContainer'>
                                <div className='sliderImage'>
                                    <img src={'https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fcustomer-images%2Fjustin-modrak.png&w=1920&q=80'} alt='loading...' />
                                </div>
                                <div className='sliderBody'>
                                    <h2 className='sliderh2'>
                                        "Hexnode is of great value. Works great with Android and iOS!"
                                    </h2>
                                    <p className='sliderBodyName'>Justin Modrak</p>
                                    <p className='sliderBodyText'>Technology Coordinator</p>
                                    <p className='sliderBodyText'>East Troy Community School District</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide> <div className='sliderContainer'>
                            <div className='sliderImage'>
                                <img src={'https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fcustomer-images%2Fdalibor-kruljac.png&w=1920&q=80'} alt='loading...' />
                            </div>
                            <div className='sliderBody'>
                                <h2 className='sliderh2'>
                                    "Most complete MDM solution I found, and I tested many of them, including major names"
                                </h2>
                                <p className='sliderBodyName'>Dalibor kruljac</p>
                                <p className='sliderBodyText'>KAMELEYA LTD</p>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide> <div className='sliderContainer'>
                            <div className='sliderImage'>
                                <img src={'https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fcustomer-images%2Fchris-robinson.png&w=1920&q=80'} alt='loading...' />
                            </div>
                            <div className='sliderBody'>
                                <h2 className='sliderh2'>
                                    "It seemed to be in-line with everything we were looking at."
                                </h2>
                                <p className='sliderBodyName'>Chris Robinson</p>
                                <p className='sliderBodyText'>Executive Account Manager, NCS</p>
                            </div>
                        </div></SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className='platform'>
                <div className='platformText'>
                    <div className='platformContent'>
                        Platforms supported
                    </div>
                    <div className='platformBody'>
                        <img className='platImage' src={'https://static.hexnode.com/v2/assets/img/ads-pages/platform/android.svg'} alt='loading' />
                        <img className='platImage' src={'https://static.hexnode.com/v2/assets/img/ads-pages/platform/windows.svg'} alt='loading' />
                        <img className='platImage' src={'https://static.hexnode.com/v2/assets/img/ads-pages/platform/ios.svg'} alt='loading' />
                        <img className='platImage' src={'https://static.hexnode.com/v2/assets/img/ads-pages/platform/android-tv.svg'} alt='loading' />
                        <img className='platImage' src={'https://static.hexnode.com/v2/assets/img/ads-pages/platform/apple-tv.svg'} alt='loading' />
                        <img className='platImage' src={'https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fplatform%2Famazon-fire.png&w=256&q=100'} alt='loading' />
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Tabs;
