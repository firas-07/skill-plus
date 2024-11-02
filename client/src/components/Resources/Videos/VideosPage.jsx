import React from 'react'
import folder from '../../../assets/icons/folder.png'
const VideosPage = () => {
    const videos = [
        { name: "Java Basics" },
        { name: "Data Types" },
        { name: "Operators" },
        { name: "Loops" },
        { name: "Advanced Topics" },
        { name: "Data Structures" },
        { name: ".NET Basics" },
        { name: "HTML 5" },
        { name: "CSS 3" },
        { name: "Frontend" },
        { name: "Backend Topics" },
        { name: "API Integration" },
        { name: "Data Analytics" },
        { name: "Java Core" },
        { name: "Database" },
        { name: "Designing" },
        { name: "Machine Learning" },
        { name: "Java Full Stack" }
    ]
    return (
        <section className='py-5'>
            <h1 className='text-3xl text-center text-[#E6B9A6] font-bold'>Videos</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-[14px] text-[12px] m-2 font-semibold md:w-[20%] w-[70%] text-[#F6F4EB]'>A free repository of more than 1000 videos uploaded by the Skill Plus</p>
            </div>
            <div className='flex justify-center'>
                <hr className="shrink-0 max-w-full h-0.5 border-2 hidden md:block border-white border-solid w-[1245px]" />
            </div>
            <div className='w-[100%] mt-5 flex justify-center'>
                <div className='flex items-center justify-between bg-white md:w-[50%]'>
                    <input type="text" placeholder='Search for a title' className='bg-transparent outline-none ml-3' />
                    <button className='p-3 bg-[#E6B9A6]'>Go</button>
                </div>
            </div>
            <div className='grid md:grid-rows-3 gap-10 md:grid-cols-6 grid-cols-2 mt-10'>
                {
                    videos.map((videos) => {
                        return (
                            <div className='flex flex-col justify-center items-center'>
                                <img src={folder} alt="" className='w-10' />
                                <h1 className='text-white'>{videos.name}</h1>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default VideosPage
