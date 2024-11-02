import React from 'react'
import feedback from '../../assets/icons/feedback.png'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
const FeedBack = () => {
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const feedback = e.target.feedback.value
        const ratings = e.target.ratings.value
        try {
            await axios.post('http://localhost:5000/feedback', { feedback, ratings })
            alert("Feedback Submitted Successfully")
        } catch (error) {
            alert(error);
        }
    }
    return (
        <div className='start-page w-[1536px] flex justify-center items-center h-[775px]'>
            <div className='bg-white p-5 flex flex-col items-center w-[40%] h-[500px]'>
                <div className='flex gap-5 items-center'>
                    <img src={feedback} className='w-14' alt="" />
                    <h1 className='text-3xl font-bold'>Thank You for using Skill Plus</h1>
                </div>
                <form action="" className='flex flex-col'>
                    <h1 className='font-medium my-5'>How likely to rate our website from Rate 1-10</h1>
                    <input name='ratings' type="number" className='w-full outline-none text-sm border border-black px-2 p-1' placeholder='Rate your experience fron 1-10' />
                    <h1 className='font-medium my-5'>Let us know to improve our website</h1>
                    <textarea name="feedback" className='border border-black h-[150px] p-2 text-sm' placeholder='Share your thoughts about our website' id="" />
                    <div className='flex items-center gap-5'>
                        <button type='submit' onClick={handleSubmit} className='px-3 p-2 mt-10 text-white bg-blue-600 rounded-sm'>Submit</button>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSe6EEwz-T-TA35JvY4SIt_GynUocRX5fYIvk39g9011nqsERg/viewform" target="_blank" rel="noopener noreferrer">
                            <button type='submit' className='px-3 p-2 mt-10 text-white bg-blue-600 rounded-sm'>Give Feedback</button>
                        </a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FeedBack
