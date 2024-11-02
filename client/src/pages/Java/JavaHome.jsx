import React, { useState } from 'react'
import Tick from '../../assets/icons/checkmark.png'
import Section1 from '../../assets/startpage1.png'
import LogoImg from '../../assets/logo-img.png'
import LogoText from '../../assets/logo-text.png'
import Company from '../../assets/company-specific.png'
import Book from '../../assets/book-img.png'
import Book1 from '../../assets/best1.png'
import Book2 from '../../assets/best2.png'
import Book3 from '../../assets/best3.png'
import { Link } from 'react-router-dom'
import Profile from '../../assets/icons/account.png'
import Footer from '../../components/Footer'
import ChatBot from '../../assets/chatbot.png'
import Bot from '../../assets/chatmsg-bot1.png'
import wallpaper from '../../assets/chatbot-msg-wallpaper.png'

import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI("AIzaSyC55tSGVUZ2KJf0epLFXTZs7gMjH5v-DDE");

const JavaHome = () => {
    const [showNavbar, setShowNavbar] = useState(false)
    const [showProfile, setShowProfile] = useState(false)
    const [showChatbot, setShowChatbot] = useState(false)

    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    const handleSend = async () => {
        if (input.trim()) {
            const userMessage = { sender: 'user', text: input };
            setMessages([...messages, userMessage]);

            // Send message to the backend API
            const model = genAI.getGenerativeModel({ model: "gemini-pro" });
            const prompt = input + "and give it in few words";
            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();

            // Add bot response to the message list
            const botMessage = { sender: 'bot', text: text };
            setMessages([...messages, userMessage, botMessage]);

            setInput('');
        }
    };

    return (
        <div>
            {/* Navbar */}
            <nav className='flex justify-between h-[80px] md:gap-5 w-[100%] items-center sticky top-0 z-10 bg-[#F6F4EB] md:h-24 pt-8 md:pt-12'>
                <div className='flex items-start justify-start md:ml-0 ml-[-5%] w-[40%] md:w-[20%]'>
                    <img src={LogoImg} className='md:w-[40%] w-[70%]' />
                    <img src={LogoText} className='md:w-[70%] md:ml-[-28%] ml-[-45%] mt-[-16%]' />
                </div>
                <ul className='hidden md:flex md:gap-14 font-bold md:justify-center mt-[-4%] w-[25%]'>
                    <a className='nav-items'>Home</a>
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
                    <nav className='start-page w-[50%] absolute right-0 z-20 top-0 h-[780px]'>
                        <div className='flex justify-end m-3'>
                            <i class="fa-solid fa-xmark text-2xl cursor-pointer text-white" onClick={() => { setShowNavbar(false) }}></i>
                        </div>
                        <div className='flex ml-[25%] items-center gap-4 mt-56'>
                            <h1 className='text-white text-xl' style={{ borderBottom: "3px solid white" }}>Home</h1>
                        </div>
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
                        <div className='w-[45%] font-bold flex items-center justify-end ml-[43%] mt-[100%] lg:gap-5'>
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
                    <nav className='start-page md:w-[20%] w-[50%] absolute right-0 z-20 top-0 h-[780px]'>
                        <div className='flex justify-end m-3'>
                            <i class="fa-solid fa-xmark text-2xl cursor-pointer text-white" onClick={() => { setShowProfile(false) }}></i>
                        </div>
                        <Link to={'/java/batch'}>
                            <div className='flex md:ml-[25%] ml-[10%] items-center gap-4 mt-56'>
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
                        <Link to={'/java/analysis'}>
                            <div className='flex md:ml-[25%] ml-[10%] items-center gap-4 mt-8'>
                                <i class="fa-solid fa-magnifying-glass-chart text-white text-2xl"></i>
                                <h1 className='text-white text-xl'>Analysis</h1>
                            </div>
                        </Link>
                    </nav> : ""
            }

            {/* Hero Section */}
            <section className='start-page md:mx-10 mx-5 rounded-2xl relative'>
                <h1 className='md:pt-28 md:pl-28 pl-5 pt-20 heading'>
                    <span className='text-[#FF3D00] font-bold text-4xl'>Unlock Your</span> <span className='text-[#FFC107] font-bold text-4xl md:ml-2 ml-1'>Potential,</span> <br />
                    <span className='text-[#FFC107] font-bold text-4xl m-1'>Learn</span> <span className='text-[#FF3D00] font-bold text-4xl ml-2'>Anytime,</span> <br />
                    <span className='text-[#FF3D00] font-bold text-4xl ml-1'>Anywhere</span>
                </h1>
                <img src={Section1} className='md:absolute md:top-36 md:right-0' />
                <div className='text-white pl-5 pt-10 md:pl-28 md:pt-10 md:w-[40%] w-[90%]'>
                    <p>Navigate through a wide range of courses, certifications, and resources designed to help you achieve your goals. From beginner to expert, we’ve got something for everyone.</p>
                </div>
                <div className='md:pb-24 md:pl-8 md:ml-0 ml-[-17%] pt-10 pb-10 md:pt-0'>
                    <div className='flex items-center gap-5 pl-20 mt-5'>
                        <img src={Tick} className='w-6' />
                        <h1 className='text-white text-lg font-semibold'>Courses and Certifications</h1>
                    </div>
                    <div className='flex items-center gap-5 pl-20 mt-5'>
                        <img src={Tick} className='w-6' />
                        <h1 className='text-white text-lg font-semibold'>Data Structures & Algorithms</h1>
                    </div>
                    <div className='flex items-center gap-5 pl-20 mt-5'>
                        <img src={Tick} className='w-6' />
                        <h1 className='text-white text-lg font-semibold'>Company-specific Questions</h1>
                    </div>
                    <div className='flex items-center gap-5 pl-20 mt-5'>
                        <img src={Tick} className='w-6' />
                        <h1 className='text-white text-lg font-semibold'>Training and Process Tracking</h1>
                    </div>
                </div>

            </section>

            {/* Company Specific Section */}
            <section className='mt-7 mx-10 relative md:flex md:flex-row flex flex-col gap-10'>
                <div className='bg-[#4682A9] md:w-[60%] flex gap-5 rounded-2xl pb-[7%]'>
                    <h1 className='text-white md:text-3xl w-[60%] pl-5 pb-20 md:w-[50%] font-medium md:p-10 py-5  md:pl-12 md:pt-28'>Company - Specific Courses</h1>
                    <img src={Company} className='md:absolute md:w-[35%] w-[70%] absolute right-[-15%] top-7 md:right-[44%]' />
                </div>
                <div className='bg-[#4682A9] md:w-[60%] md:flex gap-5 rounded-2xl'>
                    <img src={Book} className='md:mt-10 md:ml-0 ml-12' alt="" />
                    <div>
                        <h1 className='font-medium md:text-xl md:mt-16 ml-5 md:ml-0'>"The Best Things in Life are Free, <br /> The Second Best are very Expensive"</h1>
                        <div className='flex items-center justify-start ml-3 md:ml-0'>
                            <div className='flex flex-col items-center mt-10'>
                                <img src={Book1} alt="" />
                                <h1 className='text-lg ml-3 font-semibold'>Articles</h1>
                            </div>
                            <div className='flex flex-col items-center mt-9'>
                                <img src={Book2} alt="" />
                                <h1 className='text-lg ml-3 font-semibold'>Test</h1>
                            </div>
                            <div className='flex flex-col items-center mt-12'>
                                <img src={Book3} alt="" />
                                <h1 className='text-lg ml-3 font-semibold'>Videos</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Chatbot Icon */}
            <img src={ChatBot} className='sticky bottom-0 left-[100%] cursor-pointer' onClick={() => setShowChatbot(true)} />

            {/* Chatbot Message Screen */}
            {
                showChatbot ?
                    <div className='w-80 absolute right-0 top-0 pb-2 z-40 bg-[#F6F4EB]'>
                        {/* Header */}
                        <div className='flex justify-between start-page p-3 items-center'>
                            <div className='flex gap-2 items-center'>
                                <img src={Bot} className='w-14' alt="Bot" />
                                <h1 className='text-white'>Skill Bot</h1>
                            </div>
                            <i className="fa-solid fa-xmark text-white cursor-pointer" onClick={() => setShowChatbot(false)}></i>
                        </div>

                        {/* Message Screen */}
                        <div className='relative flex flex-col justify-start w-[100%] mt-1 items-center h-[300px] overflow-y-auto'
                            style={{
                                backgroundImage: `url(${wallpaper})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat'
                            }}
                        >
                            {messages.map((message, index) => (
                                <div key={index} className={`${message.sender} relative w-full flex`}>
                                    <p className='text-[12px] top-[10%] start-page p-1 px-2 text-white mt-1 mx-2 rounded-md bg-opacity-70 bg-black'>
                                        {message.sender === 'user' ? '' : <img src={Bot} className='w-10 ml-[-4%]' alt="Bot" />}
                                        {message.text}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Input Section */}
                        <div className='flex items-center justify-between mt-2 mb-2 mx-2 gap-2'>
                            <input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                placeholder='Type your queries here!'
                                className='p-2 pr-24 outline-none border bottom-1 border-black rounded-full text-[70%] w-full'
                            />
                            <div className='p-1 px-2 start-page rounded-full' onClick={handleSend}>
                                <i className="fa-solid fa-paper-plane text-white cursor-pointer"></i>
                            </div>
                        </div>
                    </div>
                    : ""
            }

            {/* Footer Section */}
            <Footer />
        </div>
    )
}

export default JavaHome
