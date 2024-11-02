import React from 'react';
import TestimonialCard from './TestimonialCard';

const testimonialsData = [
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0fdb18b8f4f70a1aa01936f4dec25f690d374cbf666b181fd4e7f7e50ec14a08?placeholderIfAbsent=true&apiKey=ee2b05a1b4fb470485852e4a897cb916",
    name: "Agnel John",
    rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/388620313ce385372428e613951f099ef55d8b5f758aac7f600c911686a1f7b6?placeholderIfAbsent=true&apiKey=ee2b05a1b4fb470485852e4a897cb916",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id consectetur ligula, ac pulvinar justo."
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0fdb18b8f4f70a1aa01936f4dec25f690d374cbf666b181fd4e7f7e50ec14a08?placeholderIfAbsent=true&apiKey=ee2b05a1b4fb470485852e4a897cb916",
    name: "Joe Stanly",
    rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/87fb7ab5e0bf4088d69179330d4f18be71a59e7cd31b7a6ee5619ffcead7579e?placeholderIfAbsent=true&apiKey=ee2b05a1b4fb470485852e4a897cb916",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id consectetur ligula, ac pulvinar justo."
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/6c1de15da4e21246194e8fb026edaba413e283523bf3c109a1764eb6b05c6a02?placeholderIfAbsent=true&apiKey=ee2b05a1b4fb470485852e4a897cb916",
    name: "Bill Gates",
    rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/87fb7ab5e0bf4088d69179330d4f18be71a59e7cd31b7a6ee5619ffcead7579e?placeholderIfAbsent=true&apiKey=ee2b05a1b4fb470485852e4a897cb916",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id consectetur ligula, ac pulvinar justo."
  }
];

const Testimonials = () => {
  return (
    <section className="mt-12 ml-10 max-md:mt-10 max-md:max-w-full">
      <h2 className="text-4xl font-black text-black max-md:max-w-full">
        What people say about <span className="text-sky-900">Skill Plus</span>
      </h2>
      <div className="mt-10 max-w-full w-[1398px] max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;