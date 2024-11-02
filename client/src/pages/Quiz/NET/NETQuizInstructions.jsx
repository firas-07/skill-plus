import React from 'react'
import { Link } from 'react-router-dom'

const NETQuizInstructions = () => {
    return (
        <div className='flex justify-center mt-[2%]'>
            <section className='w-[1000px] h-[350px] m-5 gap-3 bg-white p-5 flex flex-col justify-start items-start'>
                <div className='flex items-center gap-2'>
                    <i class="fa-solid fa-bars"></i>
                    <h1 className='font-medium'>.NET Developer Final Assessment - Skill Plus - Instructions</h1>
                </div>
                <div className='flex items-center gap-2'>
                    <h1 className='font-bold'>Multiple Choice Questions (10 Q - 15 mins):</h1>
                    <p>Read all the questions and choose the correct answer</p>
                </div>
                <h1 className='text-blue-500 mt-10'>Kindly accept the terms and conditions to continue test</h1>
                <div className='flex items-start justify-start gap-3'>
                    <input type="checkbox" className='mt-2'/>
                    <h1>I have read and understood the instructions. I declare that I am not in possession of any prohibited material with me. I agree that in case of not adhering to the instructions, I shall be liable to be debarred from this Test and/or to disciplinary action, which may include ban from future Tests / Examinations.</h1>
                </div>
                <div className='flex items-center gap-3 m-3 mt-5'>
                    <Link to={'/net/test'}>
                        <button className='bg-white px-5 p-1 text-black border border-black'>Prev</button>
                    </Link>
                    <Link to={'/net/test/steps'}>
                        <button className='bg-blue-500 px-3 p-1 text-white'>Accept and Proceed</button>
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default NETQuizInstructions
