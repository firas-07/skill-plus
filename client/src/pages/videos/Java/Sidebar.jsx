import React from 'react';

const modules = [
  { id: 1, name: 'Module 1' },
  { id: 2, name: 'Module 2' },
  { id: 3, name: 'Module 3' },
  { id: 4, name: 'Module 4' },
  { id: 5, name: 'Module 5' },
];

const sidebarItems = ['Grades', 'Notes', 'Discussion Forms', 'Messages', 'Course Info'];

function Sidebar() {
  return (
    <aside className="md:flex md:flex-col w-1/5 max-md:ml-0 max-md:w-full hidden pr-3" style={{borderRight:"3px solid white"}}>
      <div className="flex flex-col self-stretch my-auto w-full">
        <div className="flex flex-col pr-1.5 pl-3.5">
          <h1 className="text-3xl font-semibold text-[#E6B9A6]">Java Full Stack</h1>
          <h2 className="self-start mt-3.5 text-2xl font-medium text-white">Skill Plus</h2>
        </div>
        <div className="flex self-start mt-12 text-xl font-medium text-white max-md:mt-10">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6b09d3c499482d2416d643b6e47a14efd7e811001587dc976babcd2c524c5a6?placeholderIfAbsent=true&apiKey=a6343008e88b41f389a2cf613b0f8c75" alt="" className="object-contain shrink-0 aspect-square w-[70px]" />
          <div className="self-start mt-6 basis-auto">Course Material</div>
        </div>
        <nav className="flex flex-col pl-5 mt-3 w-full text-xl font-semibold text-white">
          {modules.map((module, index) => (
            <div key={module.id} className={`flex gap-3 ${index === 0 ? 'pr-12 text-black bg-stone-100 max-md:pr-5' : 'self-start mt-6 ml-7 max-md:ml-2.5'}`}>
              {index === 0 && <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc46dffa8d1a3bafcacde0e42274390fbf508eff57e70a134f5213b1efd4ae28?placeholderIfAbsent=true&apiKey=a6343008e88b41f389a2cf613b0f8c75" alt="" className="object-contain shrink-0 aspect-[0.14] w-[5px]" />}
              <div className="flex gap-3 my-auto">
                <div className="flex shrink-0 my-auto w-5 h-5 bg-[#E6B9A6] rounded-full" />
                <div>{module.name}</div>
              </div>
            </div>
          ))}
          {sidebarItems.map((item, index) => (
            <div key={index} className={`self-center mt-${index === 0 ? '12' : '7'} font-bold ${index === 2 ? 'self- max-md:mr-1' : ''} max-md:mt-10`}>
              {item}
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;