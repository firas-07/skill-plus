import React from 'react';
import CourseCard from './CourseCard';

const coursesData = [
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0fdb18b8f4f70a1aa01936f4dec25f690d374cbf666b181fd4e7f7e50ec14a08?placeholderIfAbsent=true&apiKey=ee2b05a1b4fb470485852e4a897cb916",
    title: "Java Essentials",
    description: "Learn java core and essential things..."
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0fdb18b8f4f70a1aa01936f4dec25f690d374cbf666b181fd4e7f7e50ec14a08?placeholderIfAbsent=true&apiKey=ee2b05a1b4fb470485852e4a897cb916",
    title: ".NET Essentials",
    description: "Learn .NET core and essential things..."
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0fdb18b8f4f70a1aa01936f4dec25f690d374cbf666b181fd4e7f7e50ec14a08?placeholderIfAbsent=true&apiKey=ee2b05a1b4fb470485852e4a897cb916",
    title: "Data Engineering",
    description: "Learn data core and essential things..."
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0fdb18b8f4f70a1aa01936f4dec25f690d374cbf666b181fd4e7f7e50ec14a08?placeholderIfAbsent=true&apiKey=ee2b05a1b4fb470485852e4a897cb916",
    title: "Java Essentials",
    description: "Learn java core and essential things..."
  }
];

const PopularCourses = () => {
  return (
    <section className="flex flex-col items-start pl-9 w-full bg-stone-100 max-md:pl-5 max-md:max-w-full">
      <div className="flex shrink-0 max-w-full h-[270px] md:h-[997px] md:w-[1476px]" />
      <h2 className="md:mt-24 text-4xl font-black text-white max-md:max-w-full">
        <span className="text-black">Browse your </span>
        <span className="text-yellow-400">popular courses</span>
      </h2>
      <div className="flex flex-wrap gap-8 self-end mt-12 w-full max-w-[2368px] max-md:mt-10 max-md:max-w-full">
        {coursesData.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </section>
  );
};

export default PopularCourses;