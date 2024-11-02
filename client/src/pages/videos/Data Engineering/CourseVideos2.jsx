import React from 'react'
import { Link } from 'react-router-dom';

const CourseVideos2 = () => {
  const videos = [
    { title: 'What is Data Streaming', duration: '3 min', type: 'Video', link: "/dataEngineering/videosplay2" },
    { title: 'Pillars of Data Engineering', duration: '10 min', type: 'Video' },
    { title: 'ETL vs ELT', duration: '17 min', type: 'Video' },
    { title: '3 ways to Deploy Data projects', duration: '22 min', type: 'Video' },
  ];
  return (
    <div className='w-[92%]'>
      <div className="flex text-xl font-medium text-white w-full" style={{ borderBottom: "solid 2px white" }}>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6b09d3c499482d2416d643b6e47a14efd7e811001587dc976babcd2c524c5a6?placeholderIfAbsent=true&apiKey=a6343008e88b41f389a2cf613b0f8c75" alt="" className="object-contain shrink-0 aspect-square w-[70px]" />
        <h2 className="self-start mt-6 basis-auto">Course Videos</h2>
      </div>
      <div className="flex gap-3.5 self-start mt-3 max-w-full max-md:mt-10">
        <div className="flex flex-col gap-7 grow shrink-0 items-start text-xl basis-0 text-stone-100 w-fit">
          <div className='flex items-center gap-3'>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/813d0a823fa6efd4a760e9681408b2ad280aae2b646d713f81e673437f4cf9ce?placeholderIfAbsent=true&apiKey=a6343008e88b41f389a2cf613b0f8c75"  alt="" />
            <div>
              <h1>What is Data Engineering</h1>
              <div className='flex items-center gap-3'>
                <h1>Video</h1>
                <h1>8 min</h1>
              </div>
            </div>
          </div>
          {
            videos.map((video) => {
              return (
                <Link to={video.link}>
                  <div className='flex items-center gap-3'>
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/233ab0e9272476fa0370fff9b33b8bf43d5961b4deded0000b7f05cdfe502dbe?placeholderIfAbsent=true&apiKey=a6343008e88b41f389a2cf613b0f8c75" alt="" />
                    <div>
                      <h1>{video.title}</h1>
                      <div className='flex items-center gap-3'>
                        <h1>{video.type}</h1>
                        <h1>{video.duration}</h1>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default CourseVideos2
