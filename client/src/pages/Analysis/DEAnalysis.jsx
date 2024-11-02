import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Profile from '../../assets/icons/account.png';
import LogoImg from '../../assets/logo-img.png';
import LogoText from '../../assets/logo-text.png';
import 'jspdf-autotable';

const DEAnalysis = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    const navigate = useNavigate()
    return (
        <div>
            {/* Navbar */}
            <nav className='flex justify-between h-[80px] md:gap-5 w-[100%] items-center sticky top-0 z-30 bg-[#F6F4EB] md:h-24 pt-8 md:pt-12'>
                <div className='flex items-start justify-start md:ml-0 ml-[-5%] w-[40%] md:w-[20%]'>
                    <img src={LogoImg} className='md:w-[40%] w-[70%]' />
                    <img src={LogoText} className='md:w-[70%] md:ml-[-28%] ml-[-45%] mt-[-16%]' />
                </div>
                <ul className='hidden md:flex md:gap-14 font-bold md:justify-center mt-[-4%] w-[25%]'>
                    <Link to={'/java/home'}><a>Home</a></Link>
                    <Link to={'/java/courses'}><a>Courses</a></Link>
                    <Link to={'/java/resources'}><a>Resources</a></Link>
                </ul>
                <div className='text-[#808080] hidden md:gap-2 md:flex items-center justify-start w-[20%] bg-white rounded-xl p-1 pl-2 mt-[-4%]'>
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input placeholder='search here' className='bg-transparent mt-[-1%] outline-none' />
                </div>
                <div className='w-[35%] hidden font-bold lg:flex lg:items-center lg:justify-end mt-[-4%] lg:gap-5'>
                    <div className='w-[35%] font-bold flex items-center justify-end mr-10 gap-5 cursor-pointer' >
                        <img src={Profile} onClick={() => { setShowProfile(true) }} className='w-8' />
                    </div>
                </div>

                <div className='md:hidden ml-[-15%] mr-5 cursor-pointer' onClick={() => { setShowNavbar(true) }}>
                    <i class="fa-solid fa-bars text-2xl mb-9"></i>
                </div>
            </nav>
            {/* Side Navbar */}
            {
                showNavbar ?
                    <nav className='start-page w-[50%] absolute right-0 z-30 top-0 h-[780px]'>
                        <div className='flex justify-end m-3'>
                            <i class="fa-solid fa-xmark text-2xl cursor-pointer text-white" onClick={() => { setShowNavbar(false) }}></i>
                        </div>
                        <Link to={'/java/home'}>
                            <div className='flex ml-[25%] items-center gap-4 mt-56'>
                                <h1 className='text-white text-xl'>Home</h1>
                            </div>
                        </Link>
                        <Link to={'/java/courses'}>
                            <div className='flex ml-[25%] items-center gap-4 mt-8'>
                                <h1 className='text-white text-xl'>Courses</h1>
                            </div>
                        </Link>
                        <Link to={'/java/resources'}>
                            <div className='flex ml-[25%] items-center gap-4 mt-8'>
                                <h1 className='text-white text-xl'>Resources</h1>
                            </div>
                        </Link>
                        <div className='w-[45%] font-bold flex items-center justify-end ml-[43%] mt-[110%] lg:gap-5'>
                            <div className='w-[35%] font-bold flex items-center justify-end mr-10 gap-2 cursor-pointer' >
                                <img src={Profile} onClick={() => { setShowProfile(true) }} className='w-8' />
                                <h1 className='text-[#E6B9A6]'>Profile</h1>
                            </div>
                        </div>
                    </nav> : ""
            }

            {/* Profile Sidebar */}
            {
                showProfile ?
                    <nav className='start-page md:w-[20%] w-[50%] absolute right-0 z-40 top-0 h-[780px]'>
                        <div className='flex justify-end m-3'>
                            <i class="fa-solid fa-xmark text-2xl cursor-pointer text-white" onClick={() => { setShowProfile(false) }}></i>
                        </div>
                        <Link to={'/java'}>
                            <div className='flex md:ml-[25%] ml-[10%] items-center gap-4 mt-56 '>
                                <i class="fa-solid fa-chalkboard text-white text-2xl"></i>
                                <h1 className='text-white text-xl'>Learning</h1>
                            </div>
                        </Link>
                        <Link to={'/java/report'}>
                            <div className='flex md:ml-[25%] ml-[10%] items-center gap-4 mt-8'>
                                <i class="fa-solid fa-chart-line text-white text-2xl"></i>
                                <h1 className='text-white text-xl'>Report</h1>
                            </div>
                        </Link>
                        <div className='flex md:ml-[25%] ml-[10%] items-center gap-4 mt-8 ' >
                            <i class="fa-solid fa-magnifying-glass-chart text-white text-2xl"></i>
                            <h1 className='text-white text-xl' style={{borderBottom:"3px solid white"}}>Analysis</h1>
                        </div>
                    </nav> : ""
            }

            <main className='start-page flex justify-center mx-10 rounded-xl'>
                <div className='p-10 h-[650px] flex flex-col items-start gap-5'>
                    <div className='flex justify-center ml-20'>
                        <h1 className='text-3xl text-white font-bold'>Analysis</h1>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <button onClick={() => { navigate('/performancetrends') }} className='mt-12 font-semibold text-xl text-white bg-black hover:text-black hover:bg-[#F6F4EB] p-2 px-10 rounded-xl'>Performance Trends</button>
                        <button onClick={() => { navigate('/feedbackanalysis') }} className='mt-5 font-semibold text-xl text-white bg-black hover:text-black hover:bg-[#F6F4EB] px-12 p-2 rounded-xl'>Feedback Analysis</button>
                        <button onClick={() => { navigate('/comparisonmetrics') }} className='mt-5 font-semibold text-xl text-white bg-black hover:text-black hover:bg-[#F6F4EB] p-2 rounded-xl px-[40px]'>Comparison Metrics</button>
                        <button onClick={() => { navigate('/successmetrics') }} className='mt-5 font-semibold text-xl text-white bg-black hover:text-black hover:bg-[#F6F4EB] p-2 rounded-xl px-16'>Success Metrics</button>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default DEAnalysis;
