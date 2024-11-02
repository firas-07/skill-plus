import React, { useState } from 'react';
import Profile from '../../../assets/icons/account.png'
import LogoImg from '../../../assets/logo-img.png'
import LogoText from '../../../assets/logo-text.png'
import ChatBot from '../../../assets/chatbot.png'
import Bot from '../../../assets/chatmsg-bot1.png'
import wallpaper from '../../../assets/chatbot-msg-wallpaper.png'
import { Link } from 'react-router-dom';
import MainContent5 from './MainContent5';
import SideMenu5 from './SideMenu5';

import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI("AIzaSyC55tSGVUZ2KJf0epLFXTZs7gMjH5v-DDE");
const NETLayout5 = () => {
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
      <nav className='flex justify-between h-[80px] md:gap-5 w-[100%] items-center sticky top-0 z-30 bg-[#F6F4EB] md:h-24 pt-8 md:pt-12'>
        <div className='flex items-start justify-start md:ml-0 ml-[-5%] w-[40%] md:w-[20%]'>
          <img src={LogoImg} className='md:w-[40%] w-[70%]' />
          <img src={LogoText} className='md:w-[70%] md:ml-[-28%] ml-[-45%] mt-[-16%]' />
        </div>
        <ul className='hidden md:flex md:gap-14 font-bold md:justify-center mt-[-4%] w-[25%]'>
          <Link to={'/net/home'}><a>Home</a></Link>
          <Link to={'/net/courses'}><a>Courses</a></Link>
          <Link to={'/net/resources'}><a>Resources</a></Link>
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
            <Link to={'/net/home'}>
              <div className='flex ml-[25%] items-center gap-4 mt-56'>
                <h1 className='text-white text-xl'>Home</h1>
              </div>
            </Link>
            <Link to={'/net/courses'}>
              <div className='flex ml-[25%] items-center gap-4 mt-8'>
                <h1 className='text-white text-xl'>Courses</h1>
              </div>
            </Link>
            <Link to={'/net/resources'}>
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
            <div className='flex md:ml-[25%] ml-[10%] items-center gap-4 mt-56'>
              <i class="fa-solid fa-chalkboard text-white text-2xl"></i>
              <h1 className='text-white text-xl' style={{ borderBottom: "3px solid white" }}>Learning</h1>
            </div>
            <Link to={'/net/report'}>
              <div className='flex md:ml-[25%] ml-[10%] items-center gap-4 mt-8'>
                <i class="fa-solid fa-chart-line text-white text-2xl"></i>
                <h1 className='text-white text-xl'>Report</h1>
              </div>
            </Link>
            <Link to={'/net/analysis'}>
              <div className='flex md:ml-[25%] ml-[10%] items-center gap-4 mt-8'>
                <i class="fa-solid fa-magnifying-glass-chart text-white text-2xl"></i>
                <h1 className='text-white text-xl'>Analysis</h1>
              </div>
            </Link>
          </nav> : ""
      }

      <div className="px-2 pt-11 rounded-3xl max-md:max-w-full start-page mx-10 pr-8">
        <div className="flex gap-5 max-md:flex-col">
          <SideMenu5 />
          <MainContent5 path='/videoplay/4' />
        </div>
      </div>

      {/* Chatbot Icon */}
      <img src={ChatBot} className='sticky bottom-0 left-[100%] cursor-pointer z-20' onClick={() => setShowChatbot(true)} />

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

    </div>
  );
};

export default NETLayout5;