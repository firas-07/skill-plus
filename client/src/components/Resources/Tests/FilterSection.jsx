import React from 'react';

const subjects = [
  'Java Fundamentals',
  'Java Full Stack',
  'Frontend Development',
  '.NET Developer',
  'Machine Learning',
  'Data Analytics'
];

function FilterSection() {
  return (
    <aside className="md:flex md:flex-col w-[25%] max-md:ml-0 max-md:w-full hidden">
      <div className="flex grow gap-4 text-xl font-semibold text-stone-100 max-md:mt-9">
        <div className="flex flex-col grow shrink-0 items-start self-start mt-8 basis-0 w-fit">
          <h2 className="text-2xl font-bold">FILTERS</h2>
          <h3 className="mt-8">Subjects</h3>
          {subjects.map((subject, index) => (
            <div key={index} className="flex items-center gap-2.5 mt-7">
              <input type="checkbox" />
              <div className="basis-auto">{subject}</div>
            </div>
          ))}
        </div>
        <div className="shrink-0 w-0.5 border-2 border-white border-solid h-[767px]" />
      </div>
    </aside>
  );
}

export default FilterSection;