import React from 'react';
import { Link } from 'react-router-dom';
import Java from '../../../assets/Videos Resources/DE2.mp4'
const MainContent2 = ({ path }) => {
    return (
        <main className="flex flex-col md:ml-5 md:w-[79%] h-[550px] md:h-full">
            <div className="flex flex-col w-full text-[#F6F4EB] md:mt-10 max-md:max-w-full">
                <div className="flex md:flex-wrap md:gap-5 justify-between md:ml-4 text-[10px] w-full md:text-xl font-medium max-md:max-w-full">
                    <div className="flex gap-3 items-center md:my-auto max-md:max-w-full">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/fcdcca967d18771101777c1a4f3ab6ecc7a1e2b93608ad588e1538f9a441b4cf?placeholderIfAbsent=true&apiKey=a6343008e88b41f389a2cf613b0f8c75" alt="" className="object-contain shrink-0 self-stretch aspect-square md:w-[30px] w-[20px]" />
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b830071a925fc80ad611a51db9fe5bb0bbee54b17f3839626893faee260f3fb2?placeholderIfAbsent=true&apiKey=a6343008e88b41f389a2cf613b0f8c75" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-square md:w-[25px] w-[20px]" />
                        <div className="self-stretch my-auto md:w-32 w-20">Module 1</div>
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b830071a925fc80ad611a51db9fe5bb0bbee54b17f3839626893faee260f3fb2?placeholderIfAbsent=true&apiKey=a6343008e88b41f389a2cf613b0f8c75" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-square md:w-[25px] w-[20px]" />
                        <div className="md:self-stretch md:my-auto md:basis-auto">What is Data Streaming?</div>
                    </div>
                    <nav className="flex items-center md:gap-10 gap-8 whitespace-nowrap">
                        <Link to={'/dataEngineering/videos1'}>
                            <button className="flex md:gap-3">
                                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8df49a342cebc85c689ac6e58f65c0c0c1bca2486e4c633b112fa01c4ffaa32c?placeholderIfAbsent=true&apiKey=a6343008e88b41f389a2cf613b0f8c75" alt="" className="object-contain shrink-0 aspect-square md:w-[35px] w-[20px]" />
                                <span className="my-auto">Previous</span>
                            </button>
                        </Link>
                        <Link to={'/dataEngineering/videos3'}>
                            <button className="flex md:gap-3">
                                <span className="my-auto">Next</span>
                                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a3f5df0f6ea3887edd6be0e905f8041b9b520ac5e141f03946e13b6f06529ac?placeholderIfAbsent=true&apiKey=a6343008e88b41f389a2cf613b0f8c75" alt="" className="object-contain shrink-0 aspect-square md:w-[35px] w-[20px]" />
                            </button>
                        </Link>
                    </nav>
                </div>

                <video width="100%" className='mt-5' height="100%" controls>
                    <source src={Java} type="video/mp4" />
                </video>
                <h1 className="self-start mt-9 md:text-3xl font-bold">What is Data Streaming?</h1>
            </div>
        </main>
    );
};

export default MainContent2;