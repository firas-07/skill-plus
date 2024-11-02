import React from 'react';

function TestCard({ title, questions, icon}) {
    return (
        <article className="flex flex-col md:w-[30%] md:h-[60%] max-md:ml-0 max-md:w-full">
            <div className="flex justify-between md:w-[100%] gap-5 items-center px-5 py-10 md:pr-5 md:pl-4 text-black bg-white ">
                <div className="flex bg-[#E6B9A6] shrink-0 rounded-full md:h-[70px] md:w-[70px] w-[50px] h-[50px]" role="img" aria-label="Test icon">
                    <i className={`${icon} md:mt-5 md:text-2xl ml-4 mt-4 md:ml-5`}></i>
                </div>
                <div className="flex flex-col">
                    <h3 className="md:text-xl text-[12px] font-semibold">{title}</h3>
                    <p className="self-start mt-8 md:text-base text-[10px] font-light">{questions} Questions</p>
                </div>
            </div>
        </article>
    );
}

export default TestCard;