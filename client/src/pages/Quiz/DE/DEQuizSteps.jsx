import React from 'react'
import { Link } from 'react-router-dom'

const DEQuizSteps = () => {
    return (
        <div className='flex justify-center mt-[2%]'>
            <section className='w-[1000px] h-[400px] bg-white p-5 flex flex-col justify-start items-start gap-2'>
                <div className='flex items-center gap-2'>
                    <i class="fa-solid fa-bars"></i>
                    <h1 className='font-medium'>Things to note</h1>
                </div>
                <b>Disable all the desktop/mobile notifications throughout the test</b>
                <div className='flex flex-col gap-3'>
                    <div className='flex gap-3 items-center'>
                        <i class="fa-solid fa-camera"></i>
                        <h1>Do not leave the camera preview</h1>
                    </div>
                    <div className='flex gap-3 items-center ml-1'>
                        <i class="fa-solid fa-play"></i>
                        <h1>Do not look away from screen</h1>
                    </div>
                    <div className='flex gap-3 items-center ml-1'>
                        <i class="fa-solid fa-window-maximize"></i>
                        <h1>Do not leave your web browser</h1>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <i class="fa-solid fa-microphone-slash"></i>
                        <h1>Do not speak unless instructed</h1>
                    </div>
                    <div className='flex gap-3 items-center ml-1'>
                        <i class="fa-solid fa-person"></i>
                        <h1>Do not leave others in room with you</h1>
                    </div>
                    <div className='flex gap-3 items-center ml-1'>
                        <i class="fa-solid fa-book"></i>
                        <h1>Do not use any outside reference material</h1>
                    </div>
                </div>
                <div className='flex items-center gap-3 m-3 mt-5'>
                    <Link to={'/dataEngineering/test/instruction'}>
                        <button className='bg-white px-5 p-1 text-black border border-black'>Prev</button>
                    </Link>
                    <Link to={'/dataEngineering/test/capture'}>
                        <button className='bg-blue-500 px-3 p-1 text-white'>Next</button>
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default DEQuizSteps
