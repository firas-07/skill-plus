import React from "react";

function ArticleCard({ company, title, description, imageSrc }) {
    return (
        <article className="mt-4 md:mt-17 w-[100%] max-md:w-full">
            <div className="flex flex-col md:w-[50%]">
                <div className="flex relative flex-col items-start pt-16 pr-20 pb-5 text-xl font-medium text-white aspect-[1.742] max-md:pr-5">
                    <img loading="lazy" src={imageSrc} alt={`${company} article cover`} className="object-cover absolute inset-0 size-full" />
                    <div className="relative px-11 py-2 max-w-full whitespace-nowrap bg-[#E6B9A6] w-[161px] max-md:px-5">
                        {company}
                    </div>
                    <h2 className="relative mt-4 ml-2.5">{title}</h2>
                </div>
                <div className="flex flex-col pt-7 pr-1.5 pb-2 pl-3 bg-white">
                    <h3 className="self-start text-xl font-bold text-[#E6B9A6]">{title}</h3>
                    <p className="mt-2.5 text-base text-black">{description}</p>
                </div>
            </div>
        </article>
    );
}

export default ArticleCard;