import React from 'react';

const TestimonialCard = ({ imageSrc, name, rating, review }) => {
  return (
    <div className="flex flex-col items-start ml-[-20px] md:ml-0 px-5 py-9 mx-auto w-full bg-white rounded-3xl max-md:pl-5 max-md:mt-6 max-md:max-w-full">
      <img loading="lazy" src={imageSrc} alt={`${name}'s testimonial`} className="object-contain self-stretch w-full rounded-3xl aspect-[2.1]" />
      <div className="flex gap-10 mt-2.5 ml-4 text-xl text-black max-md:ml-2.5">
        <div>{name}</div>
        <img loading="lazy" src={rating} alt={`${name}'s rating`} className="object-contain shrink-0 max-w-full aspect-[5.08] w-[127px]" />
      </div>
      <p className="mt-3 ml-4 text-xs text-zinc-500 w-[299px] max-md:ml-2.5">{review}</p>
    </div>
  );
};

export default TestimonialCard;