import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({ icon, text, duration, isActive }) => {
  const baseClasses = "flex gap-4 self-start mt-6 max-w-full ml-6 text-white";
  const activeClasses = "bg-stone-100 p-1 flex gap-4 self-start mt-6 ml-6 text-black";

  return (
    <div className={`${isActive ? activeClasses : baseClasses}`}>
      <img loading="lazy" src={icon} alt="" className="object-contain shrink-0 my-auto aspect-square w-[30px]" />
      <div className="flex flex-col">
        <div className="text-lg w-full">{text}</div>
        {duration && (
          <div className="flex gap-5 self-start mt-1 text-lg font-light">
            <div>Video</div>
            <div>{duration}</div>
          </div>
        )}
      </div>
    </div>
  );
};

const SideMenu5 = () => {
  return (
    <aside className="md:flex md:flex-col hidden w-[25%] max-md:ml-0 max-md:w-full" style={{ borderRight: "solid 3px white" }}>
      <div className="flex flex-col mt-1.5 w-full max-md:mt-10">
        <div className="flex gap-3 self-start ml-4 text-xl font-medium text-[#F6F4EB] max-md:ml-2.5">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/81eba283e6a3a177ac08960c322132f4b85a90401e5a313de2428358766855ac?placeholderIfAbsent=true&apiKey=a6343008e88b41f389a2cf613b0f8c75" alt="" className="object-contain shrink-0 self-start w-6 aspect-square" />
          <div className="basis-auto">Hide Menu</div>
        </div>
        <div className="flex self-start mt-2 text-xl font-medium text-white">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/445a17c03bb46cc9a7eacbc740ee692027c6792357dc7c6e5796e271b3508d52?placeholderIfAbsent=true&apiKey=a6343008e88b41f389a2cf613b0f8c75" alt="" className="object-contain shrink-0 aspect-square w-[60px]" />
          <div className="self-start mt-5 basis-auto">Course Material</div>
        </div>
        <div className="flex flex-col pl-3 w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca070d1b5bd12df77256a523f9414de4327f79e2f730304aacd352cf98a428e8?placeholderIfAbsent=true&apiKey=a6343008e88b41f389a2cf613b0f8c75" alt="" className="object-contain w-full aspect-[83.33] max-md:mr-2 max-md:ml-2" />
          <div className="flex gap-1.5 self-start mt-2.5 text-lg text-stone-100 ml-5">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b68a29bf50c8648e726f65f1156f7f874ef94c15d87f1de5143b81c0fd38e44?placeholderIfAbsent=true&apiKey=a6343008e88b41f389a2cf613b0f8c75" alt="" className="object-contain shrink-0 self-start mt-5 aspect-square w-[30px]" />
            <div className='mt-2'>
              <div>What is Data Engineering</div>
              <div className='flex gap-6 font-light'>
                <h1>Video</h1>
                <p>5 min</p>
              </div>
            </div>
          </div>
          <MenuItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/3b68a29bf50c8648e726f65f1156f7f874ef94c15d87f1de5143b81c0fd38e44?placeholderIfAbsent=true&apiKey=a6343008e88b41f389a2cf613b0f8c75" text="What is Data Streaming" duration="7 min" />
          <MenuItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/3b68a29bf50c8648e726f65f1156f7f874ef94c15d87f1de5143b81c0fd38e44?placeholderIfAbsent=true&apiKey=a6343008e88b41f389a2cf613b0f8c75" text="Pillars of Data Engineering" duration="6 min" />
          <MenuItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/3b68a29bf50c8648e726f65f1156f7f874ef94c15d87f1de5143b81c0fd38e44?placeholderIfAbsent=true&apiKey=a6343008e88b41f389a2cf613b0f8c75" text="ETL vs ELT" duration="17 min" />
          <MenuItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/a2e9dd1178c5ca015e8170e201df331a8e007d306d5404c2d4d178c4e75fb307?placeholderIfAbsent=true&apiKey=a6343008e88b41f389a2cf613b0f8c75" text="Deploy Data projects" duration="22 min" isActive={true} />
        </div>
        <div className="flex self-start mt-5 text-xl font-medium text-white">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1cb59b1f19bb600982c57ceb503e5dc8e21b7399756b512292ec7382980cc46a?placeholderIfAbsent=true&apiKey=a6343008e88b41f389a2cf613b0f8c75" alt="" className="object-contain shrink-0 aspect-square w-[70px]" />
          <div className="self-start mt-6">Quiz Test</div>
        </div>
        <Link to={'/dataEngineering/assessment'}>
          <div className="flex gap-4 self-start ml-14 mt-2 max-w-full text-xl font-medium text-stone-100 w-full">
            <div className="my-auto">Take Quiz</div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/72ac488db3ec435ad954eec8e81b0366b651bae79f89d325522c7ede1c86e79f?placeholderIfAbsent=true&apiKey=a6343008e88b41f389a2cf613b0f8c75" alt="" className="object-contain shrink-0 aspect-square w-[30px]" />
          </div>
        </Link>
        <div className="self-center mt-12 text-xl font-bold text-white max-md:mt-10">Grades</div>
        <div className="self-center mt-8 text-xl font-bold text-white">Course Info</div>
      </div>
    </aside>
  );
};

export default SideMenu5;