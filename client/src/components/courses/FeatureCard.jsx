import React from "react";

function FeatureCard({ icon, title, description, url }) {
    return (
        <div className="flex flex-col max-md:ml-0 mt-5 pb-5 max-md:w-full">
            <div className="flex flex-col items-center self-stretch my-auto font-medium text-center max-md:mt-10 z-10">
                <div className={`flex shrink-0 ${icon} rounded-full h-[61px] w-[61px]`} >
                    <i className={`${url} text-white text-2xl ml-[30%] mt-[24%]`}></i>
                </div>
                <h3 className="mt-2.5 text-xl text-black">{title}</h3>
                <p className="self-stretch mt-2.5 text-sm text-zinc-500 mr-2 md:w-full md:ml-0 ml-16 w-[60%]">{description}</p>
            </div>
        </div>
    );
}

export default FeatureCard;