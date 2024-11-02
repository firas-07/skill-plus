import React from 'react';

function QuizSection() {
  return (
    <section className="my-5">
      <div className="flex text-xl font-medium text-white" style={{ borderBottom: "2px solid white" }}>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6b09d3c499482d2416d643b6e47a14efd7e811001587dc976babcd2c524c5a6?placeholderIfAbsent=true&apiKey=a6343008e88b41f389a2cf613b0f8c75" alt="" className="object-contain shrink-0 aspect-square w-[70px]" />
        <h2 className="self-start mt-6">Quiz Test</h2>
      </div>
      <div className="flex flex-wrap gap-5 justify-between self-end mt-2 ml-7 max-w-full text-xl font-medium text-stone-100 w-[958px]">
        <button className="flex gap-4 self-start items-center" onClick={()=>{alert("Complete all the videos to attend the test")}}>
          <span className="my-auto">Take Quiz</span>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f9c0ba9741785d25514812a7bce93c3d8d6554de311b0dd86f03cff38a67940?placeholderIfAbsent=true&apiKey=a6343008e88b41f389a2cf613b0f8c75" alt="" className="object-contain shrink-0 aspect-square w-[30px]" />
        </button>
      </div>
    </section>
  );
}

export default QuizSection;