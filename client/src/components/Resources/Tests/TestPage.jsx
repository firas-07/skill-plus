import React from 'react';
import FilterSection from './FilterSection';
import TestCard from './TestCard';

const testData = [
  { title: 'HTML and CSS Assessment', questions: 30, icon: "fa-solid fa-code" },
  { title: 'Machine Learning Exam', questions: 30, icon: "fa-solid fa-laptop" },
  { title: 'Java Core Assessment', questions: 30, icon: "fa-brands fa-java" },
  { title: 'Java Full Stack Assessment', questions: 30, icon: "fa-brands fa-java" },
  { title: 'Frontend Assessment', questions: 30, icon: "fa-solid fa-code" },
  { title: 'Data Analytics Assessment', questions: 30, icon: "fa-solid fa-database" },
  { title: '.NET Developer Assessment', questions: 30, icon: "fa-solid fa-code" },
  { title: 'Backend Assessment', questions: 30, icon: "fa-brands fa-node-js" },
  { title: 'Java Basics Assessment', questions: 30, icon: "fa-brands fa-java" },
];

function TestsPage() {
  return (
    <div className="flex overflow-hidden flex-col justify-center md:pl-4 px-4 py-6 max-md:pr-5">
      <div className="flex flex-col px-20 md:pl-20 py-12 w-full rounded-3xl max-md:max-w-full">
        <div className='flex justify-center'><h1 className="self-start text-4xl font-bold text-[#E6B9A6]">Tests</h1></div>
        <hr className="shrink-0 mt-20 max-w-full h-0.5 border-2 hidden md:block border-white border-solid w-[1245px] max-md:mt-10" />
        <div className="w-full max-md:max-w-full">
          <div className="flex gap-5">
            <FilterSection />
            <main className="flex flex-col md:ml-5 w-[100%] max-md:ml-0 max-md:w-full">
              <section className="flex flex-col mt-20 w-full max-md:mt-10 max-md:max-w-full">
                <div className="w-full max-md:max-w-full">
                  <div className="flex flex-wrap gap-3">
                    {testData.map((test, index) => (
                      <TestCard key={index} title={test.title} questions={test.questions} icon={test.icon} />
                    ))}
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestsPage;