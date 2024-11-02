import React from 'react';

const CourseCard = ({ imageSrc, title, description }) => {
  return (
    <div className="flex flex-col md:flex-1 px-5 py-7 bg-white rounded-3xl max-md:pl-5 max-md:max-w-full mr-5">
      <img loading="lazy" src={imageSrc} alt={title} className="object-contain w-full rounded-3xl aspect-[2.1]" />
      <h3 className="self-start mt-2.5 ml-4 text-xl text-black max-md:ml-2.5">{title}</h3>
      <p className="self-start mt-2.5 ml-4 text-base text-zinc-500 max-md:ml-2.5">{description}</p>
      <div className="self-end mt-6 text-xs text-sky-600 max-md:mr-2">Read more...</div>
      <div className="shrink-0 self-end h-0 border border-sky-600 border-solid w-[77px] max-md:mr-2" />
    </div>
  );
};

export default CourseCard;