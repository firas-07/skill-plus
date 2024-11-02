import React from 'react';
import { Link } from 'react-router-dom';

const videos = [
  { title: 'Introduction to .NET Core', duration: '7 min', type: 'Video' },
  { title: '.NET Installation Guide', duration: '3 min', type: 'Video' },
  { title: 'Gen AI in .NET', duration: '10 min', type: 'Video' },
  { title: 'Update your pakage with .NET', duration: '17 min', type: 'Video' },
  { title: 'What is new in .NET', duration: '22 min', type: 'Video' },
];

function VideoItem({ title, duration, type, isFirst }) {
  return (
    <div className={`flex gap-3.5 ${isFirst ? '' : 'mt-7'} text-stone-100 max-md:ml-2.5`}>
      <img
        loading="lazy"
        src={isFirst ? "https://cdn.builder.io/api/v1/image/assets/TEMP/813d0a823fa6efd4a760e9681408b2ad280aae2b646d713f81e673437f4cf9ce?placeholderIfAbsent=true&apiKey=a6343008e88b41f389a2cf613b0f8c75" : "https://cdn.builder.io/api/v1/image/assets/TEMP/233ab0e9272476fa0370fff9b33b8bf43d5961b4deded0000b7f05cdfe502dbe?placeholderIfAbsent=true&apiKey=a6343008e88b41f389a2cf613b0f8c75"}
        alt=""
        className="object-contain shrink-0 self-start mt-1 w-8 aspect-square"
      />
      <div className="flex flex-col grow shrink-0 basis-0 w-fit">
        <div className="text-xl">{title}</div>
        <div className="flex gap-5 self-start text-lg font-light">
          <div>{type}</div>
          <div>{duration}</div>
        </div>
      </div>
    </div>
  );
}

function CourseVideos3() {
  return (
    <section className="flex flex-col items-start max-w-full w-[94%]">
      <div className="flex text-xl font-medium text-white w-full" style={{borderBottom:"solid 2px white"}}>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6b09d3c499482d2416d643b6e47a14efd7e811001587dc976babcd2c524c5a6?placeholderIfAbsent=true&apiKey=a6343008e88b41f389a2cf613b0f8c75" alt="" className="object-contain shrink-0 aspect-square w-[70px]" />
        <h2 className="self-start mt-6 basis-auto">Course Videos</h2>
      </div>
      <div className="flex gap-3.5 self-start mt-3 max-w-full max-md:mt-10">
        <div className="flex flex-col gap-7 grow shrink-0 items-start text-xl basis-0 text-stone-100 w-fit">
          {videos.slice(0, 2).map((video, index) => (
            <VideoItem key={index} {...video} isFirst={true} />
          ))}
        </div>
      </div>
      {videos.slice(2).map((video, index) => (
        <Link to={'/net/videosplay3'}><div className='w-full'><VideoItem key={index + 2} {...video} isFirst={false} /></div></Link>
      ))}
    </section>
  );
}

export default CourseVideos3;